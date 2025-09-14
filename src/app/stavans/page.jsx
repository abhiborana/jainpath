import Heading from "@/components/atoms/heading";
import { Stavans as StavansArr } from "@/constants/stavans";
import { cn } from "@/lib/utils";
import { Kalam } from "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "Jain Stavans for All 24 Tirthankars | Lyrics | JainPath",
  description:
    "A beautiful collection of Jain Stavans dedicated to all 24 Tirthankars. Find lyrics in hindi to immerse yourself in devotion.",
};

const kalam = Kalam({
  subsets: ["devanagari"],
  weight: "700",
});

const Stavans = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Heading id="pachkhans">Collection of Jain Stavans</Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {StavansArr.map((stavan, i) => (
          <Link
            key={stavan.slug}
            href={"/stavans" + stavan.slug}
            className={cn(
              "p-3 md:px-6 flex items-center justify-center text-balance text-center shadow-md rounded-xl border font-medium transition-colors text-xl leading-12 duration-300 aspect-square shrink-0 break-all",
              kalam.className,
              !(i % 2)
                ? "text-amber-200 bg-pink-900"
                : "text-pink-900 bg-amber-200"
            )}
          >
            {stavan.heading}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stavans;
