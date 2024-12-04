import Marquee from "@/components/ui/marquee"
import biology from "@/assets/Biology.png"
import BM from "@/assets/BM.png"
import chemistry from "@/assets/Chemistry.png"
import econimics from "@/assets/Economics.png"
import geography from "@/assets/Geography.png"
import physics from "@/assets/Physics.png"
import Image, { StaticImageData } from "next/image"

const reviews = [
  {
    name: "biology",
    subjectImage: biology,
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "BM",
    subjectImage: BM,
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Chemistry",
    subjectImage: chemistry,
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Economics",
    subjectImage: econimics,
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Geography",
    subjectImage: geography,
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Physics",
    subjectImage: physics,
    img: "https://avatar.vercel.sh/james",
  },
]

const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  subjectImage,
}: {
  img: string
  name: string
  subjectImage: StaticImageData
}) => {
  return (
    <div className="h-[232px] w-[192px] shrink-0 px-1">
      <div
        aria-label="Sports, exercise and health science (SEHS)"
        className="relative isolate block size-full flex-none cursor-pointer snap-center overflow-hidden rounded-2xl transition-all"
      >
        <img
          alt={name}
          className="object-cover opacity-30 blur-2xl saturate-200 transition-opacity hover:opacity-50"
          src={img}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
        <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl transition-transform hover:scale-105">
          <Image
            alt={name}
            loading="lazy"
            className="relative z-10 h-[200px] w-[160px] rounded-md"
            src={subjectImage}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  )
}

export function SubjectMarquee() {
  return (
    <div className="relative flex h-[240px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
    </div>
  )
}
