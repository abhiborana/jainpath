import Heading from "@/components/atoms/heading";
import { Pachkhans as PachkhansArray } from "@/constants/pachkhans";
import { ArrowRightIcon, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Jain Pachkhans - Jain Path",
  description:
    "All types of jain pachkhans, navkarsi, porsi, sadh posri, purimaddh, avaddh, upvas, ekashana, biyasana, ayambil, nivi, cohvihar, tivihar, duvihar and more.",
};

const Pachkhans = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Heading id="pachkhans">Jain Pachkhans</Heading>
      <div className="flex flex-col gap-4">
        {PachkhansArray.map((pachkhan) => (
          <Link
            key={pachkhan.title}
            href={"/pachkhans" + pachkhan.slug}
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

export default Pachkhans;
