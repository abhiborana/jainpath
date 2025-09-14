"use client";

import { SlugOptions } from "@/constants/slugs";
import { MandirVidhis } from "@/constants/vidhis";
import { getRandomIntegar } from "@/lib";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { memo, useMemo, useState } from "react";
import CustomPara from "./atoms/custom-para";
import Heading from "./atoms/heading";
import { Button } from "./ui/button";

const RenderVidhis = ({ slug }) => {
  const [number, setNumber] = useState(getRandomIntegar(24));
  const vidhi = useMemo(
    () => MandirVidhis.find((p) => p.slug === `/${slug}`),
    [slug]
  );
  if (!vidhi) return notFound();

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="flex w-full items-center justify-start gap-4 flex-wrap">
        <Link href={"/mandir-vidhi"}>
          <ArrowLeftIcon className="text-neutral-500" />
        </Link>
        <Heading className={"w-fit text-pink-900"} kalam>
          {vidhi.heading}
        </Heading>
        {vidhi.randomize && (
          <Button
            className={"ml-auto"}
            onClick={() => setNumber(getRandomIntegar(24))}
          >
            Randomise
          </Button>
        )}
      </div>
      {vidhi?.steps?.length
        ? vidhi?.steps?.map((kriya, i) =>
            typeof kriya === "function" ? (
              <CustomPara key={`kriya-${i}`} val={kriya(SlugOptions[number])} />
            ) : (
              <CustomPara key={`kriya-${i}`} val={kriya} />
            )
          )
        : "Coming Soon"}
      <CustomPara
        val={
          "🙏 विधि करता जो कोई अविधि हुई हो, तो मन वचन काया से मिच्छामि दुक्कडम। 🙏"
        }
        className="text-neutral-500"
      />
    </div>
  );
};

export default memo(RenderVidhis);
