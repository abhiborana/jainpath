"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import Paragraph from "./atoms/paragraph";

const CurrentNiyam = () => {
  const [niyam, setNiyam] = useLocalStorage("niyam", null);

  return niyam ? (
    <Paragraph
      className={"tracking-wide leading-8 font-medium text-lg text-balance"}
    >
      {niyam}
    </Paragraph>
  ) : (
    <Paragraph>
      <b>Choose a number</b> from below to take a niyam, or get a{" "}
      <Link href={"/#random-niyam"} className="underline">
        random niyam
      </Link>
      ,
    </Paragraph>
  );
};

export default CurrentNiyam;
