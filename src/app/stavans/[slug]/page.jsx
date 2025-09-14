import RenderStavan from "@/components/render-stavan";
import { Stavans } from "@/constants/stavans";
import { use } from "react";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;

  const stavan = Stavans.find((s) => s.slug === `/${slug}`);

  return {
    title: `${stavan.title} Stavan - Lyrics & Meaning | JainPath`,
    description: `Read or sing the lyrics for the ${stavan.title} Stavan. A devotional tribute to our Tirthankar.`,
  };
}

const StavanSlug = ({ params }) => {
  const { slug } = use(params);
  return <RenderStavan slug={slug} />;
};

export default StavanSlug;
