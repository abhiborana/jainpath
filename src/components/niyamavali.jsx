"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Niyams } from "@/constants/niyams";
import useLocalStorage from "@/hooks/useLocalStorage";
import { shuffleArray } from "@/lib";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { Confetti } from "./magicui/confetti";
import { Button } from "./ui/button";

const Niyamavali = () => {
  const [open, setOpen] = useState(false);
  const [_, setNiyam] = useLocalStorage("niyam", null);

  const shuffledNiyams = shuffleArray(Niyams);
  const confettiRef = useRef(null);

  return (
    <>
      <div className="flex flex-wrap justify-center max-w-2xl gap-2">
        {shuffledNiyams.map((niyam, i) => (
          <button
            key={niyam}
            onClick={() => setOpen(i + 1)}
            className={cn(
              "md:size-20 size-14 overflow-hidden flex items-center justify-center shadow transition-colors duration-300 rounded-md md:shadow-md font-medium md:text-lg",
              i % 2
                ? "bg-[#f6d4ef] hover:bg-[#e482cb]"
                : "bg-[#f9eaf6] hover:bg-[#f6d4ef]"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md gap-12">
          <DialogHeader className={"gap-6"}>
            <DialogDescription>Your Niyam</DialogDescription>
            <DialogTitle
              className={"tracking-wide leading-8 text-3xl text-balance"}
            >
              {shuffledNiyams[open - 1]}
            </DialogTitle>
          </DialogHeader>
          <Confetti
            className="absolute left-0 top-0 -z-10 size-full"
            ref={confettiRef}
            duration={1000}
          />
          <DialogFooter className="justify-end">
            <Button
              onClick={() => {
                setNiyam(shuffledNiyams[open - 1]);
                setOpen(false);
              }}
              type="button"
              className={"w-fit z-10 ml-auto tracking-wide"}
            >
              वोसीरामी
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Niyamavali;
