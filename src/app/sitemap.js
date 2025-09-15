import { Pachkhans } from "@/constants/pachkhans";
import { Stavans } from "@/constants/stavans";
import { MandirVidhis } from "@/constants/vidhis";

const slugs = [
  "/",
  "/stavans",
  "/miyams",
  "/pachkhans",
  "/mandir-vidhi",
  "/bhaktamar",
  ...Stavans.map((s) => `${process.env.NEXT_PUBLIC_DOMAIN}/stavans${s.slug}`),
  ...MandirVidhis.map(
    (v) => `${process.env.NEXT_PUBLIC_DOMAIN}/mandir-vidhi${v.slug}`
  ),
  ...Pachkhans.map(
    (p) => `${process.env.NEXT_PUBLIC_DOMAIN}/pachkhans${p.slug}`
  ),
];

export default function sitemap() {
  return slugs.map((e) => ({
    url: e,
    lastModified: new Date(),
  }));
}
