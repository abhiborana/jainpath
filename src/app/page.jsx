"use client";

import Heading from "@/components/atoms/heading";
import CurrentNiyam from "@/components/current-niyam";
import NiyamDrawer from "@/components/niyam-drawer";
import Niyamavali from "@/components/niyamavali";
import { Pachkhans } from "@/constants/pachkhans";
import { ArrowRightIcon, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="sr-only">Daily Niyam - Jain Pacchakan, Niyam, Aradhana</h1>
      <div className="flex items-center justify-between w-full gap-4">
        <Heading>Your Niyam</Heading>
      </div>
      <CurrentNiyam />
      <NiyamDrawer />
      <Niyamavali />
      <h3 className="sr-only">
        Jain Pachkan | Jain Pacchhakan | Jain Pacchkhan
      </h3>
      <Heading id="pachkhans">Other Pachkhans</Heading>
      <div className="flex flex-col gap-4">
        {Pachkhans.map((pachkhan) => (
          <Link
            key={pachkhan.title}
            href={pachkhan.slug}
            className="p-3 md:px-6 flex items-center justify-between text-center gap-4 shadow-md rounded-xl border hover:bg-slate-100 bg-white font-medium transition-colors duration-300"
          >
            {pachkhan.time === "day" ? (
              <SunIcon className="size-4 text-yellow-600 shrink-0" />
            ) : (
              <MoonIcon className="size-4 text-violet-600 shrink-0" />
            )}
            <div className="flex-1 line-clamp-1">{pachkhan.title}</div>
            <ArrowRightIcon className="shrink-0 size-4 text-slate-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
