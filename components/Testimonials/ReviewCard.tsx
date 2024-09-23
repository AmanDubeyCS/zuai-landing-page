import Marquee from "../ui/marquee"
import { Icons } from "../icons"

const reviews = [
  {
    name: "Alice Johnson",
    title: "Boosted my grades!",
    description:
      "ZuAI has transformed how I study. The coursework help is tailored and engaging, making complex subjects easy to understand.",
  },
  {
    name: "David Lee",
    title: "Best study time-saver tool",
    description:
      "Using ZuAI for IB coursework is a game changer! I love how it streamlines study notes and quizzes, letting me focus on key topics.",
  },
  {
    name: "Emily Clark",
    title: "Highly Satisfied",
    description:
      "Great value for the price. Customer support was very helpful when I had questions about the product.",
  },
  {
    name: "John Doe",
    title: "Not Worth the Hype",
    description:
      "I found the product to be overpriced for what it offers. The quality was below my expectations.",
  },
  {
    name: "Sarah Miller",
    title: "Best Purchase Ever!",
    description:
      "Absolutely love this! It has been a game changer for me. I would definitely buy it again.",
  },
  {
    name: "Michael Brown",
    title: "Okay, but not great",
    description:
      "The product is fine, but there are better options available for the same price. Service was average.",
  },
  {
    name: "Laura Wilson",
    title: "Exceeded Expectations",
    description:
      "I was pleasantly surprised by the quality and speed of delivery. Definitely worth the purchase.",
  },
  {
    name: "James Davis",
    title: "Disappointed",
    description:
      "I had high hopes for this, but the product didn’t live up to the reviews I read online. Would not recommend.",
  },
  {
    name: "Olivia Martinez",
    title: "Great Customer Service",
    description:
      "Although I had some issues with the product, the customer service was excellent and resolved my problem quickly.",
  },
  {
    name: "William Taylor",
    title: "Solid Buy",
    description:
      "The product works as advertised. Nothing fancy, but it gets the job done. Would buy again.",
  },
]

const ReviewCard = ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  return (
    <div className="flex h-[240px] w-[360px] flex-col items-start gap-3 self-stretch rounded-[24px] border border-neutrals-200 bg-white p-4">
      <div className="relative">
        <Icons.Quote className="absolute left-[6px] h-[19px] w-[27px] rotate-180 lg:h-[37px] lg:w-[51px]" />
        <p className="relative z-10 line-clamp-5 items-start px-4 py-2 text-[22px] font-medium leading-[125%] text-neutrals-700">
          {description}{" "}
        </p>
        <Icons.Quote className="absolute bottom-[-26px] right-[12px] h-[19px] w-[27px] lg:h-[37px] lg:w-[51px]" />
      </div>
      <span className="px-8 text-base font-normal leading-[125%] text-neutrals-800">
        -{name}
      </span>
    </div>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative mx-auto flex size-full h-[400px] w-[calc(100vw-2rem)] max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white"></div>
    </div>
  )
}
