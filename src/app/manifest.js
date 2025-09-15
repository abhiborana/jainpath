export default function manifest() {
  return {
    name: "Jain Path - Pachkhan, Niyam, Jain Stavan, Aradhana",
    short_name: "Jain Path",
    start_url: "/",
    scope: process.env.NEXT_PUBLIC_DOMAIN,
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    description:
      "JainPath is a modern, all-in-one resource for Jainism. Easily access all Pachkhans, listen to Stavans, learn Mandir Vidhis, and take a daily Niyam. Your complete digital companion for spiritual growth.",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#f8fafc",
    icons: [
      {
        purpose: "any",
        sizes: "any",
        src: "/icon.png",
        type: "image/png",
      },
    ],
  };
}
