"use client";

import { Stavans } from "@/constants/stavans";
import { useMemo } from "react";
import CustomPara from "./atoms/custom-para";
import Heading from "./atoms/heading";
import Paragraph from "./atoms/paragraph";

const RenderStavan = ({ slug }) => {
  const stavan = useMemo(
    () => Stavans.find((p) => p.slug === `/${slug}`),
    [slug]
  );
  if (!stavan) return notFound();
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <Heading className={"w-fit text-pink-900"} kalam>
        {stavan.heading} स्तवन
      </Heading>
      <Paragraph className={"text-center text-neutral-500 font-medium"}>
        तर्ज : {stavan.raag}
      </Paragraph>
      <CustomPara val={stavan.content} className={"whitespace-break-spaces"} />
    </div>
  );
};

export default RenderStavan;
