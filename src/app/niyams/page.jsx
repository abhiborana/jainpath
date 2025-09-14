import Heading from "@/components/atoms/heading";
import CurrentNiyam from "@/components/current-niyam";
import NiyamDrawer from "@/components/niyam-drawer";
import Niyamavali from "@/components/niyamavali";

export const metadata = {
  title: "Take a Daily Random Jain Niyam | JainPath",
  description:
    "Challenge yourself and grow spiritually. Get a new, random, and achievable Jain Niyam every day with our interactive tool.",
};

const Niyams = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Heading>Your Daily Jain Niyam</Heading>
      <CurrentNiyam />
      <NiyamDrawer />
      <Niyamavali />
    </div>
  );
};

export default Niyams;
