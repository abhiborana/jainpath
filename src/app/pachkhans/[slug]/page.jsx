import RenderPachkhans from "@/components/render-pachkhans";
import { Pachkhans } from "@/constants/pachkhans";
import { use } from "react";

export async function generateMetadata({ params }, parent) {
  const slug = (await params).slug;

  const pachkhan = Pachkhans.find((s) => s.slug === `/${slug}`);

  return {
    title: pachkhan?.title || "" + " | JainPath",
    description: `Learn the complete Vidhi for the ${pachkhan.title}. Understand its meaning, the correct sutra to recite, and the exact timings to follow. JainPath makes it easy.`,
  };
}

const Page = ({ params }) => {
  const { slug } = use(params);
  return <RenderPachkhans slug={slug} />;
};

export default Page;
