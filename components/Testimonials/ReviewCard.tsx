import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

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
];

const ReviewCard = ({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col w-[300px] h-[250px] bordercursor-pointer overflow-hidden rounded-xl p-4 justify-between",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-col items-start gap-2">
        <p className="text-[26px] font-bold leading-[normal] tracking-[0.139px]">
          {title}
        </p>
        <p className="text-base font-normal">{description}</p>
      </div>
      <p className="text-[18px] font-semibold tracking-[0.087px] leading-[normal]">
        - {name}
      </p>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative mx-auto h-[400px] flex size-full w-[calc(100vw-2rem)] flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
