import { cn } from "@/lib/utils";
import { Kalam } from "next/font/google";

const kalamFont = Kalam({
  subsets: ["devanagari"],
  weight: "700",
});

const Heading = ({ children, kalam = false, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-4xl md:pt-8 font-semibold w-full tracking-tighter text-balance text-left md:text-center md:text-6xl",
        kalam && kalamFont.className,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
