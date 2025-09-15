"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Niyams } from "@/constants/niyams";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Share2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScratchToReveal } from "./magicui/scratch-to-reveal";

const NiyamDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setNiyam] = useLocalStorage("niyam", null);

  const niyam = Niyams[Math.floor(Math.random() * Niyams.length)];

  return (
    <Drawer dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <DrawerTrigger asChild>
          <Button
            id="random-niyam"
            className={"text-lg px-6 py-6 rounded-full"}
          >
            Get Random Niyam
          </Button>
        </DrawerTrigger>
        <Button asChild className={"rounded-full"} variant={"outline"}>
          <Link
            href={`https://wa.me?text=प्रणाम, जैनपथ के माध्यम से पाएं नित्य नियम, पच्चखाण, भक्तामर स्तोत्र, मंदिर विधि चैत्यवंदन स्तवन सभी एक जगह पर। ${process.env.NEXT_PUBLIC_DOMAIN}`}
            target="_blank"
          >
            <Share2Icon /> WhatsApp
          </Link>
        </Button>
      </div>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle>Your Niyam</DrawerTitle>
            <DrawerDescription>
              Scrath this card to know your niyam
            </DrawerDescription>
          </DrawerHeader>
          <ScratchToReveal
            width={250}
            height={250}
            minScratchPercentage={50}
            className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-pink-100 border-[#631646]"
            gradientColors={["#8C2A4D", "#631646", "#8C2A4D"]}
          >
            <p className="tracking-wide leading-8 text-2xl text-center text-balance font-medium">
              {niyam}
            </p>
          </ScratchToReveal>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant={"default"}
                onClick={() => {
                  setNiyam(niyam);
                  setIsOpen(false);
                }}
              >
                वोसीरामी
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NiyamDrawer;
