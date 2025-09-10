import RenderPachkhans from "@/components/render-pachkhans";
import { Pachkhans } from "@/constants/pachkhans";
import { use } from "react";

export async function generateMetadata({ params }, parent) {
  const slug = (await params).slug;

  const pachkhan = Pachkhans.find((s) => s.slug === `/${slug}`);

  return {
    title: pachkhan?.title || "",
    description: pachkhan?.title || "",
    keywords: pachkhan?.seo || ["jain pachkhans"],
  };
}

const Page = ({ params }) => {
  const { slug } = use(params);
  return <RenderPachkhans slug={slug} />;
};

export default Page;
