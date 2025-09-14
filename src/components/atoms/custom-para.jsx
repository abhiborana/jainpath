import { cn } from "@/lib/utils";
import { Noto_Sans_Devanagari } from "next/font/google";
import Paragraph from "./paragraph";

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: "400",
});

const CustomPara = ({ val, className }) => (
  <Paragraph
    className={cn(
      "text-center text-balance break-words",
      notoSansDevanagari.className,
      val.startsWith("(")
        ? "text-sm md:text-base font-medium text-pink-800"
        : "text-lg md:text-xl",
      className
    )}
  >
    {val}
  </Paragraph>
);

export default CustomPara;
