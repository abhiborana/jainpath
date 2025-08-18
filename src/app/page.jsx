import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";
import NiyamDrawer from "@/components/niyam-drawer";
import Niyamavali from "@/components/niyamavali";
import { Pachkhans } from "@/constants/pachkhans";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Heading>Today's Niyam</Heading>
      <Paragraph>
        <b>Choose a number</b> from below table to take a niyam, or get a{" "}
        <Link href={"/#random-niyam"} className="underline">
          random niyam
        </Link>
        ,
      </Paragraph>
      <Niyamavali />
      <NiyamDrawer />
      <h3 className="sr-only">
        Jain Pachkan | Jain Pacchhakan | Jain Pacchkhan
      </h3>
      <Heading id="pachkhans">Other Pachkhans</Heading>
      <div className="flex flex-col gap-3">
        {Pachkhans.map((pachkhan) => (
          <Link
            href={pachkhan.slug}
            className="p-3 md:px-6 shadow rounded-xl border hover:bg-slate-100 bg-white font-medium transition-colors duration-300"
          >
            {pachkhan.title} -&gt;
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
