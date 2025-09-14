import RenderVidhis from "@/components/render-vidhis";
import { MandirVidhis } from "@/constants/vidhis";
import { use } from "react";

export async function generateMetadata({ params }, parent) {
  const slug = (await params).slug;

  const vidhi = MandirVidhis.find((s) => s.slug === `/${slug}`);

  return {
    title: `How to do ${vidhi.title} - A Step-by-Step Guide | JainPath`,
    description: `A simple, step-by-step guide to performing the ${vidhi.title} correctly. Follow along with key sutras and explanations on JainPath.`,
  };
}

const VidhiSlug = ({ params }) => {
  const { slug } = use(params);
  return <RenderVidhis slug={slug} />;
};

export default VidhiSlug;
