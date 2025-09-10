export default function manifest() {
  return {
    name: "Jain Path - Pachkhan, Niyam, Jain Stavan, Aradhana",
    short_name: "Jain Path",
    start_url: "/",
    scope: "https://jainpath.vercel.app/",
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    description:
      "Jain Pachkhan, Jain Stavans, Jain vidhi, Aradhana, Daily niyam & more.",
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
