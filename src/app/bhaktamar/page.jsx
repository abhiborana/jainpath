import CustomPara from "@/components/atoms/custom-para";
import Heading from "@/components/atoms/heading";
import { Bhaktamar, Navkar, Uvasaggaharm } from "@/constants/sutras";

export const metadata = {
  title: "भक्तामर स्तोत्र | Shree Bhakhtamar Stotra | JainPath",
  description:
    "The complete Bhaktamar Stotra by Acharya Manatunga, with all 44 verses in Hindi. Read lyrics, understand the meaning, and listen to the audio recitation.",
};

const BhaktamarPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <Heading className={"w-fit text-pink-900"} kalam>
        भक्तामर स्त्रोत
      </Heading>
      <CustomPara val={Navkar} className={"whitespace-break-spaces"} />
      <CustomPara val={Uvasaggaharm} className={"whitespace-break-spaces"} />
      <CustomPara val={Bhaktamar} className={"whitespace-break-spaces"} />
    </div>
  );
};

export default BhaktamarPage;
