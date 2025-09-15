"use client";

import { SlugOptions } from "@/constants/slugs";
import { MandirVidhis } from "@/constants/vidhis";
import { getRandomIntegar } from "@/lib";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { memo, useMemo, useState } from "react";
import CustomPara from "./atoms/custom-para";
import Heading from "./atoms/heading";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const RenderVidhis = ({ slug }) => {
  const [number, setNumber] = useState(getRandomIntegar(24));
  const [short, setShort] = useState(false);
  const vidhi = useMemo(
    () => MandirVidhis.find((p) => p.slug === `/${slug}`),
    [slug]
  );
  if (!vidhi) return notFound();

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="flex w-full items-center justify-start gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Button
            asChild
            size={"icon"}
            variant={"outline"}
            className={"md:mt-4"}
          >
            <Link href={"/mandir-vidhi"}>
              <ChevronLeftIcon className="size-5" />
            </Link>
          </Button>
          <Heading className={"w-fit text-pink-900 text-2xl"} kalam>
            {vidhi.heading}
          </Heading>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {vidhi.short && (
            <div className="flex flex-col items-center gap-2">
              <Switch
                id="shortvidhi"
                checked={short}
                onCheckedChange={(val) => setShort(val)}
              />
            </div>
          )}
          {vidhi.randomize && (
            <Button
              className={"ml-auto rounded-full"}
              onClick={() => setNumber(getRandomIntegar(24))}
              size={"icon"}
            >
              <ShuffleIcon className="size-4" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col snap-y gap-4 p-4 w-full snap-mandatory overflow-x-auto aspect-[3/4] border rounded-xl shadow-lg bg-white">
        {vidhi?.[short ? "short" : "steps"]?.length
          ? vidhi?.[short ? "short" : "steps"]?.map((kriya, i) =>
              typeof kriya === "function" ? (
                <CustomPara
                  key={`kriya-${i}`}
                  val={kriya(SlugOptions[number])}
                  className={cn(
                    "w-full snap-start snap-always shrink-0 text-pink-900"
                  )}
                />
              ) : (
                <CustomPara
                  key={`kriya-${i}`}
                  val={kriya}
                  className={cn("w-full snap-center snap-always shrink-0")}
                />
              )
            )
          : "Coming Soon"}
      </div>
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
