import NiyamDrawer from "@/components/niyam-drawer";
import Niyamavali from "@/components/niyamavali";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="text-4xl font-semibold w-full tracking-tighter text-balance text-left md:text-center md:text-6xl">
        Today's Niyam
      </h2>
      <p className="text-base tracking-tight text-balance text-left md:text-center md:text-lg w-full">
        <b>Choose a number</b> from below table to take a niyam, or get a{" "}
        <b>random niyam</b>,
      </p>
      <Niyamavali />
      <NiyamDrawer />
    </div>
  );
};

export default Home;
