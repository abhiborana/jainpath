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
      <div className="grid grid-cols-2 w-full sm:grid-cols-3 self-center gap-3 md:gap-6 items-center justify-center">
        {Links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="col-span-1 w-full rounded-lg aspect-video shadow-lg relative overflow-hidden"
          >
            <Image
              className="object-cover object-center"
              fill
              src={link.imageUrl}
              alt={link.title}
              priority
            />
            <span className="text-base md:text-4xl absolute inset-0 hover:bg-black/50 bg-black/25 hover:text-xl hover:md:text-5xl transition-all duration-500 p-4 font-semibold text-white z-10">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
      <Heading as="h2" className={"text-pink-900"}>
        Quick Links
      </Heading>
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
      <Paragraph className={"text-neutral-500 text-sm md:text-base"}>
        Welcome to JainPath, your modern companion for daily Jain Aradhana. In
        the hustle of our busy, modern lives, finding clear and simple guidance
        for sacred rituals can often be a challenge. Ancient wisdom, passed down
        through generations, can feel distant. JainPath was created to bridge
        this gap, offering an intuitive, all-in-one digital platform for
        everything you need on your spiritual journey. Our goal is to be your
        single, trusted resource, whether you're starting your day with the
        Navkarsi Pachkhan, seeking to perform a meaningful Chaityavandan with
        confidence, immersing yourself in the bhakti of timeless Stavans, or
        challenging yourself with a daily Niyam for self-improvement.
      </Paragraph>
      <Paragraph className={"text-neutral-400 text-sm md:text-base"}>
        We are dedicated to making the timeless wisdom of Jain Dharma accessible
        to every generation, but we also believe in the profound importance of
        tradition and correct practice. Think of JainPath as your digital
        companion for learning—a guide designed to make sacred sutras, stavans,
        and vidhis more approachable. The true spiritual benefit of these
        rituals comes from learning them by heart with correct pronunciation
        (Shuddha Uchharana). Our platform is a space for your sadhana—a place to
        practice repeatedly, refine your pronunciation, and build a strong,
        personal foundation in your own time. While this platform provides
        knowledge at your fingertips, the deepest understanding and grace are
        ultimately found on the path of learning from a Guru. Join us in this
        endeavor to preserve our heritage and enrich our daily lives. Let
        JainPath be the light that supports and inspires your unique spiritual
        path.
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
