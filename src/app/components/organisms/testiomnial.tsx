import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Darin Nguyen",
    username: "@staking",
    avatar: "/avatars/darin.png",
    text: "Faucibus eu condimentum maecenas sollicitudin vitae.",
    date: "22.03.2021",
  },
  {
    name: "Nur Wainwright",
    username: "@flawless",
    avatar: "/avatars/nur.png",
    text: "Volutpat nec, dictumst adipiscing mauris molestie a. Proin sit libero tristique suspendisse.",
    date: "22.03.2021",
  },
  {
    name: "Lauren Doherty",
    username: "@apetease",
    avatar: "/avatars/lauren.png",
    text: "There is no other program that walks you through exactly what you need to launch your online store fast.",
    date: "22.03.2021",
  },
];

export default function TestimonialMarquee() {
  return (
    <Marquee gradient={false} speed={30}>
      {testimonials.map((t, index) => (
        <div
          key={index}
          className={`bg-green-50 p-4 rounded-xl m-2 shadow-md ${
            index % 2 === 0 ? "w-64" : "w-72"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-gray-500">{t.username}</p>
            </div>
          </div>
          <p className="text-sm">{t.text}</p>
          <p className="text-xs text-gray-400 mt-2">{t.date}</p>
        </div>
      ))}
    </Marquee>
  );
}
