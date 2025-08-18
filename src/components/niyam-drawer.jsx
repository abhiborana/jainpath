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
import { useState } from "react";
import { ScratchToReveal } from "./magicui/scratch-to-reveal";

const NiyamDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button id="random-niyam" className={"text-lg px-6 py-6 rounded-full"}>
          Get Random Niyam
        </Button>
      </DrawerTrigger>
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
            <p className="tracking-wide leading-8">
              {Niyams[Math.floor(Math.random() * Niyams.length)]}
            </p>
          </ScratchToReveal>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant={"default"} onClick={() => setIsOpen(false)}>
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
