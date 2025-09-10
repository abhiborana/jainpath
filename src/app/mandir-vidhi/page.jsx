import Heading from "@/components/atoms/heading";
import { MandirVidhis as vidhis } from "@/constants/vidhis";
import { cn } from "@/lib/utils";
import { Kalam } from "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "Jain Mandir Vidhis - Jain Path",
  description:
    "Collection of jain mandir & derasar vidhi, chaityavandan vidhi, dev vandan vidhi, pradakshina doha, nav-angi puja doha, snatra puja vidhi, shanti kalash vidhi.",
};

const kalam = Kalam({
  subsets: ["devanagari"],
  weight: "700",
});

const MandirVidhis = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Heading id="pachkhans">Jain Mandir Vidhis</Heading>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {vidhis.map((vidhi) => (
          <Link
            key={vidhi.title}
            href={"/mandir-vidhi" + vidhi.slug}
            className={cn(
              "p-3 md:px-6 flex items-center justify-center text-balance text-center shadow-md rounded-xl border hover:bg-slate-100 bg-white font-medium text-pink-900 transition-colors text-3xl leading-12 duration-300 aspect-square shrink-0 w-36",
              kalam.className
            )}
          >
            {vidhi.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MandirVidhis;
