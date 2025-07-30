'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Marquee.css';

const tierDetails = {
  Emerging: {
    color: 'chefchaouen-blue-500',
    bgColor: 'bg-chefchaouen-blue-600',
  },
  Established: {
    color: 'carrot-orange-500',
    bgColor: 'bg-carrot-orange-600',
  },
  Premium: {
    color: 'tropical-indigo-500',
    bgColor: 'bg-tropical-indigo-600',
  },
};

const videoFilenames = [
  'v1752056295/videos/Video_12_tsjfzn',
  'v1752056295/videos/Video_1_ipg6rk',
  'v1752056295/videos/Video_11_jwo3ke',
  'v1752056288/videos/Video_9_kflayl',
  'v1752056295/videos/Video_12_tsjfzn',
  'v1752056295/videos/Video_1_ipg6rk',
  'v1752056295/videos/Video_11_jwo3ke',
  'v1752056288/videos/Video_9_kflayl',
//   'sahaana.emerging_output',
//   'sean.emerging_output',
//   'tisha.premium_output',
//   'zay.emerging_output',
];

const videoBaseUrl = process.env.NEXT_PUBLIC_VIDEO_BASE_URL || 'https://res.cloudinary.com/dlyufrawd/video/upload';

const initialSocialProofData = videoFilenames.map((baseFilename, i) => {
  const [name, tierString] = baseFilename.split('/');
  const tierName = tierString.split('/')[0];
  const capitalizedTier = (tierName.charAt(0).toUpperCase() +
    tierName.slice(1)) as keyof typeof tierDetails;

  return {
    id: i,
    tier: capitalizedTier,
    creatorName: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
    videoUrlMp4: `${videoBaseUrl}/${baseFilename}.mp4`,
    videoUrlWebm: `${videoBaseUrl}/${baseFilename}.webm`,
    posterUrl: `${videoBaseUrl}/${baseFilename}.jpg`,
    ...tierDetails[capitalizedTier],
  };
});

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export function SocialProofSection() {
  const [socialProofData, setSocialProofData] = useState(
    initialSocialProofData,
  );
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const [centerMostCardIndex, setCenterMostCardIndex] = useState<number | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Handle mounting to prevent SSR/client hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const checkIsMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [hasMounted]);

  useEffect(() => {
    const shuffledData = shuffleArray(initialSocialProofData);
    setSocialProofData(shuffledData);
    cardRefs.current = [];
    videoRefs.current = [];

    const handleVisibilityChange = () => {
      setIsAnimationPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const findCenterMostVideo = useCallback(() => {
    if (!hasMounted || isMobile) return;

    const viewportCenter = window.innerWidth / 2;
    let minDistance = Infinity;
    let foundCenterMostCardIndex = -1;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      if (rect.width === 0) return; // Skip invisible cards

      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        foundCenterMostCardIndex = index;
      }
    });

    if (foundCenterMostCardIndex !== -1) {
      setCenterMostCardIndex(foundCenterMostCardIndex);
      const videoId = parseInt(
        cardRefs.current[foundCenterMostCardIndex]?.dataset.videoId || '',
        10,
      );
      if (!isNaN(videoId)) {
        setActiveVideoId(videoId);
      }
    }

    if (!isMobile) {
      animationFrameRef.current = requestAnimationFrame(findCenterMostVideo);
    }
  }, [hasMounted, isMobile]);

  useEffect(() => {
    if (!hasMounted || !socialProofData.length || isMobile) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    // Unified logic for loading videos and finding the center
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation on first intersection to prevent race condition
            if (!animationFrameRef.current) {
              animationFrameRef.current =
                requestAnimationFrame(findCenterMostVideo);
            }

            const video = entry.target.querySelector('video');
            if (video && !video.currentSrc) {
            //   const sourceWebm = document.createElement('source');
            //   sourceWebm.src = video.dataset.srcWebm || '';
            //   sourceWebm.type = 'video/webm';
              const sourceMp4 = document.createElement('source');
              sourceMp4.src = video.dataset.srcMp4 || '';
              sourceMp4.type = 'video/mp4';
            //   video.appendChild(sourceWebm);
              video.appendChild(sourceMp4);
              video.load();
            }
          }
        });
      },
      {
        root: marqueeRef.current,
        rootMargin: '0px 400px 0px 400px',
        threshold: 0.01,
      },
    );

    const videoCards = marqueeRef.current?.querySelectorAll('.video-card');
    if (videoCards) {
      videoCards.forEach((card) => observer.observe(card));
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [hasMounted, socialProofData, findCenterMostVideo, isMobile]);

  useEffect(() => {
    if (!hasMounted || centerMostCardIndex === null || isMobile) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      let shouldPlay = false;
      // Desktop: Play only the center-most video
      if (!isMobile && index === centerMostCardIndex) {
        shouldPlay = true;
      }

      if (shouldPlay) {
        // Add a small delay to ensure video is ready
        setTimeout(() => {
          video.play().catch((error) => {
            if (error.name !== 'AbortError') {
              console.error('Video play failed:', error);
            }
          });
        }, 100);
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [centerMostCardIndex, isMobile, hasMounted]);

  // Mobile-specific video logic
  useEffect(() => {
    if (!hasMounted || !isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector('video');
          if (!video) return;

          if (entry.isIntersecting) {
            if (!video.currentSrc) {
              const sourceWebm = document.createElement('source');
              sourceWebm.src = video.dataset.srcWebm || '';
              sourceWebm.type = 'video/webm';
              const sourceMp4 = document.createElement('source');
              sourceMp4.src = video.dataset.srcMp4 || '';
              sourceMp4.type = 'video/mp4';
              video.appendChild(sourceWebm);
              video.appendChild(sourceMp4);
              video.load();
            }
            video.play().catch((error) => {
              if (error.name !== 'AbortError') {
                console.error('Video play failed:', error);
              }
            });
          } else {
            video.pause();
          }
        });
      },
      {
        root: marqueeRef.current,
        rootMargin: '0px 300px 0px 300px',
        threshold: 0.1,
      },
    );

    const videoCards = marqueeRef.current?.querySelectorAll('.video-card');
    if (videoCards) {
      videoCards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [hasMounted, isMobile, socialProofData]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!hasMounted) {
    return null;
  }

  const allVideos = [...socialProofData, ...socialProofData];

  return (
    <section id='social-proof' className='relative pb-6 md:pt-16'>
      <div className='marquee z-10' ref={marqueeRef}>
        <div
          className='marquee-content'
          data-paused={isAnimationPaused}
          style={
            {
              '--marquee-width': `-${
                (cardRefs.current[0]?.offsetWidth || 300) *
                socialProofData.length
              }px`,
            } as React.CSSProperties
          }
        >
          <div className='flex flex-shrink-0 space-x-8 px-4'>
            {allVideos.map((video, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-video-id={video.id}
                className={`video-card relative mt-8 flex-none rounded-2xl bg-black/60 ${
                  !isMobile && activeVideoId === video.id ? 'active' : ''
                } `}
                style={{ width: 'clamp(250px, 30vw, 300px)' }}
              >
                <div className='absolute -top-4 left-1/2 z-20 hidden -translate-x-1/2 md:block'>
                  <div
                    className={`rounded-full border-4 border-${video.color} px-4 py-2 text-2xl font-bold whitespace-nowrap text-white ${video.bgColor}`}
                  >
                    {video.tier}
                  </div>
                </div>

                <div className='flex flex-col px-2 pb-2 md:p-2'>
                  <div className='py-1 text-center md:hidden'>
                    <div
                      className={`inline-block rounded-full border-2 border-${video.color} ${video.bgColor} px-4 py-1 text-2xl font-bold text-white`}
                    >
                      {video.tier}
                    </div>
                  </div>
                  <div className='aspect-[9/16] w-full overflow-hidden rounded-lg'>
                    <video
                      key={isMobile ? `mobile-${index}` : `desktop-${index}`}
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      poster={video.posterUrl}
                      data-src-mp4={video.videoUrlMp4}
                    //   data-src-webm={video.videoUrlWebm}
                      loop
                      muted
                      playsInline
                      preload='none'
                      className='h-full w-full object-cover'
                    >
                      {/* Sources are added dynamically */}
                    </video>
                  </div>
                  <div className='pt-4 pb-2 text-center'>
                    <p className='pb-1 text-3xl font-bold text-white'>
                      {video.creatorName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
