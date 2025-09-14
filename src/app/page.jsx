import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";
import { Links } from "@/constants/navs";
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
