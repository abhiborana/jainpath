import { cn } from "@/lib/utils";

const Paragraph = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        "text-base tracking-tight text-balance text-left md:text-center md:text-lg w-full",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
