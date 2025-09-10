"use client";

import Heading from "@/components/atoms/heading";
import CurrentNiyam from "@/components/current-niyam";
import NiyamDrawer from "@/components/niyam-drawer";
import Niyamavali from "@/components/niyamavali";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="sr-only">Daily Niyam - Jain Pacchakan, Niyam, Aradhana</h1>
      <div className="flex items-center justify-between w-full gap-4">
        <Heading>Your Niyam</Heading>
      </div>
      <CurrentNiyam />
      <NiyamDrawer />
      <Niyamavali />
      <h3 className="sr-only">
        Jain Path - Pachkhan, Niyam, Jain Stavan, Aradhana
      </h3>
    </div>
  );
};

export default Home;
