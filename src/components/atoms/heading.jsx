import { cn } from "@/lib/utils";

const Heading = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(
        "text-4xl md:pt-8 font-semibold w-full tracking-tighter text-balance text-left md:text-center md:text-6xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
