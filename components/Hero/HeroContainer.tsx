"use client";
import React, { useEffect, useRef, useState } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Hero } from "./Hero";

export function HeroContainer() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      setIsMuted((prev => !prev));
    }
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current && !isPlaying) {
                videoRef.current.play();
              setIsPlaying(true);
            }
          } else {
            if (videoRef.current && isPlaying) {
                videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="flex flex-col overflow-hidden">
      
      <ContainerScroll
        titleComponent={
            <Hero />
        }
      >
        <video
        ref={videoRef}
        src={'https://rr7---sn-ci5gup-qxay.googlevideo.com/videoplayback?expire=1726163160&ei=eNTiZoyZDde6rtoP6qjPgAY&ip=2401%3A4900%3A1c8a%3Ab64b%3A91b%3Ad91c%3Aceb2%3A13b7&id=o-ALFg1m037bdF7AsGCQdBfFP4aIqvPdBwSevwztY4MyEB&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=8B&mm=31%2C26&mn=sn-ci5gup-qxay%2Csn-cvh76ner&ms=au%2Conr&mv=m&mvi=7&pl=53&initcwndbps=1318750&bui=AQmm2ewU9tYrdK5shdIf14Z9tFJP7Fj6nE0c3R8EB0awG66g5Oidt2KBG1HzSv-ebB8X2p0sIZY_2ME_&spc=Mv1m9ghzQiJNOaJoZvuXoZn-MpRkuMEgEAbIZLP1GqbhK16aTGGlq-Y&vprv=1&svpuc=1&mime=video%2Fmp4&ns=iuMAlznvjto4AjWqX-MkJY4Q&rqh=1&cnr=14&ratebypass=yes&dur=60.232&lmt=1717204639840538&mt=1726141052&fvip=4&c=WEB_CREATOR&sefc=1&txp=8218224&n=c17_0Ebe7o44lQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAMR2Pf2yoMbQrG2ABQ-n7Y6jrSZmPaF0UQrceZgnKW9NAiAE5P5cX0bdAZLhscDQsgeDUvN0Y-n7sNHKlYwzCr1XEA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ABPmVW0wRgIhAIazyX24XWrlkQWAuhN2NXhc-Ss0RIXUcppexNeP80v_AiEAuZij38Kclutv3_lha7tpMT2swRaLlr3fBPHpgNm6M18%3D&title=10th%20Class%20vs%20parents%20%7C%20Not%20your%20type%20%7C%20Funny%20animation%20video'}
        width="100%"
        height="auto"
        autoPlay={isPlaying}
        muted={isMuted}
        onClick={handleVideoClick}
      ></video>
      <p className="text-white absolute right-[10px] bottom-[10px]">{isMuted === true? "click to unmute":"click to mute"}</p>
        {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XDqfdOsjW0w?controls=0&loop=1&autoplay=1&playlist=XDqfdOsjW0w" 
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-[16px] w-full h-full mx-auto"
        /> */}
      </ContainerScroll>
    </div>
  );
}
