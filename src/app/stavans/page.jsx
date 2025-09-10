import Heading from "@/components/atoms/heading";
import { Stavans as StavansObj } from "@/constants/stavans";
import Link from "next/link";

export const metadata = {
  title: "Jain Stavans - Jain Path",
  description:
    "Collection of jain stavans, chovisi parmatma stavans, siddhachal stavans, bhakti geet & more.",
};

const Stavans = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Heading id="pachkhans">Jain Stavans</Heading>
      <div className="flex flex-col gap-4">
        {Object.values(StavansObj).map((stavan) => (
          <Link
            key={stavan.slug}
            href={"/stavans" + stavan.slug}
            className="p-3 md:px-6 flex items-center justify-between text-center gap-4 shadow-md rounded-xl border hover:bg-slate-100 bg-white font-medium transition-colors duration-300 aspect-square"
          >
            {stavan.slug}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stavans;
