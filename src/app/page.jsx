import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";
import { Links } from "@/constants/navs";
import { ArrowRightIcon, MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <Heading className={"text-pink-900"}>
        A Simple Path for Daily Jain Aradhana
      </Heading>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {Links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="h-32 lg:h-44 rounded-2xl aspect-video shadow-lg relative overflow-hidden"
          >
            <Image
              className="object-cover object-center"
              fill
              src={link.imageUrl}
              alt={link.title}
            />
            <span className="text-3xl absolute inset-0 hover:bg-black/50 bg-black/25 hover:text-5xl transition-all duration-500 p-4 font-semibold text-white z-10">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
      <Heading className={"text-pink-900"}>Quick Links</Heading>
      <div className="flex flex-col gap-4">
        {QuickLinks.map((links) => (
          <Link
            key={links.title}
            href={links.slug}
            className="p-3 md:px-6 flex items-center justify-between text-center gap-4 shadow-md rounded-xl border hover:bg-slate-100 bg-white font-medium transition-colors duration-300"
          >
            {links.time === "night" ? (
              <MoonIcon className="size-4 text-violet-600 shrink-0" />
            ) : (
              <SunIcon className="size-4 text-yellow-600 shrink-0" />
            )}
            <div className="flex-1 line-clamp-1">{links.title}</div>
            <ArrowRightIcon className="shrink-0 size-4 text-slate-500" />
          </Link>
        ))}
      </div>
      <Paragraph className={"text-neutral-500"}>
        Welcome to JainPath, your modern companion for daily Jain Aradhana. In
        our busy lives, finding clear and simple guidance for sacred rituals can
        be challenging. JainPath bridges this gap, offering an easy-to-use
        platform for everything you need on your spiritual journey. Whether
        you're looking to correctly take a daily Pachkhan, learn the proper
        Chaityavandan Vidhi, immerse yourself in devotional Stavans, or find a
        new Niyam for self-improvement, our goal is to be your trusted resource.
        We are dedicated to making the timeless wisdom of Jain Dharma accessible
        to every generation, right at your fingertips.
      </Paragraph>
    </div>
  );
};

export default Home;

const QuickLinks = [
  {
    title: "Navkarsi Pachkhan",
    slug: "/pachkhans/prabhat-jain-pachkhan-navkarsi-porsi-sadhporsi-purimaddh-avaddh",
  },
  { title: "Shree Bhaktamar Stotra", slug: "/bhaktamar" },
  { title: "Chaitya Vandan Vidhi", slug: "/mandir-vidhi/chaitya-vandan" },
  { title: "Daily random niyam", slug: "/niyams" },
  {
    title: "Chauvihar / Tivihar / Duvihar Pachkhan",
    slug: "/pachkhans/jain-pachkhan-chauvihar-tivihar-duvihar",
    time: "night",
  },
];
