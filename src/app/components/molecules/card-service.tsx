import {
  Monitor,
  Smartphone,
  Palette,
  TrendingUp,
  Video,
  Settings,
} from "lucide-react";

export const services = [
  {
    icon: <Monitor size={20} />,
    label: "Web Development",
    description:
      "We help convert your UI design into a real website using Tailwind, React & Next.js.",
  },
  {
    icon: <Smartphone size={20} />,
    label: "Mobile Development",
    description:
      "Creating mobile apps for iOS and Android platforms with great performance.",
  },
  {
    icon: <Palette size={20} />,
    label: "Creative Design",
    description:
      "Designing stunning UI/UX, graphics, and brand identities that stand out.",
  },
  {
    icon: <TrendingUp size={20} />,
    label: "Digital Marketing",
    description:
      "Boosting your online presence with SEO, social media, and targeted campaigns.",
  },
  {
    icon: <Video size={20} />,
    label: "Content Production",
    description: "Producing high-quality videos, photos, and written content.",
  },
  {
    icon: <Settings size={20} />,
    label: "Support & Maintenance",
    description:
      "Ensuring your website and apps run smoothly with ongoing updates.",
  },
];

const CardService = () => {
  return (
    <>
      {services.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-xl border 
        border-black/3 dark:border-white/10
        bg-white/40 dark:bg-white/5
        dark:backdrop-blur-sm dark:shadow-sm
        hover:bg-white/60 dark:hover:bg-white/10
        transition-all duration-300"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-pink-600/15 bg-pink-600/10 text-pink-500">
            {item.icon}
          </div>
          <h1 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
            {item.label}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </p>

          <button
            className="mt-6  items-center gap-2 px-4 py-2 rounded-lg
                         bg-pink-600 text-white text-sm font-medium
                         hover:bg-pink-500 transition-all"
          >
            Start a Project
            <span>↗</span>
          </button>
        </div>
      ))}
    </>
  );
};

export default CardService;
