import { Pachkhans } from "@/constants/pachkhans";
import { cn } from "@/lib/utils";
import { Noto_Sans_Devanagari } from "next/font/google";
import { notFound } from "next/navigation";
import { memo, useMemo } from "react";
import Heading from "./atoms/heading";
import Paragraph from "./atoms/paragraph";

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: "400",
});

const RenderPachkhans = ({ slug }) => {
  const pachkhan = useMemo(
    () => Pachkhans.find((p) => p.slug === `/${slug}`),
    [slug]
  );
  if (!pachkhan) return notFound();

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <Heading>{pachkhan.title}</Heading>
      <Paragraph>
        Join your hands 🙏, start every pachkhan with <b>Gurudev ki aagya se</b>
        , and always end with <b>Vosiraami</b>.
      </Paragraph>
      {["hindi", "gujrati", "english"].map((lang) => (
        <div className="flex w-full flex-col md:items-center gap-2">
          <h5 className="text-sm text-slate-500 font-medium uppercase">
            {lang}
          </h5>
          <Paragraph
            className={cn(
              "tracking-wide leading-8 text-lg",
              notoSansDevanagari.className
            )}
          >
            {pachkhan[lang]}
          </Paragraph>
        </div>
      ))}
    </div>
  );
};

export default memo(RenderPachkhans);
