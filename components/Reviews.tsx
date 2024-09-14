"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Every time I create a new @ZapSync zap it makes me happy 😁😁😁 #rockthebooksonline.",
    name: "Ambrish",
    title: "😍😍",
  },
  {
    quote:
      "Thank you @ZapSync for making my life easier and more automated! #techhacks #automation #api #nocoding.",
    name: "Hunain Siddiqui",
    title: "🔥",
  },
  {
    quote: "Recently fallen in love with @ZapSync.",
    name: " Faiz",
    title: "💯",
  },
  {
    quote:
      "Love @ZapSync. Great way to discover early customers via twitter. Via ZapSync, you can link your slack to twitter and set up alerts for key word triggers related to your product..",
    name: "Aman",
    title: "",
  },
  {
    quote:
      "@ZapSync is like that friend you have that “has a guy” that can literally do just about anything..",
    name: "Raj Shekhar",
    title: "🥳",
  },
  {
    quote:
    "When you make a complex @ZapSync work and you feel like an absolute boss.",
    name: "Anshul",
    title: "🔥",
  },

];
