export default function manifest() {
  return {
    name: "Daily Niyam - Jain Pacchakan, Niyam, Aradhana",
    short_name: "Daily Niyam",
    start_url: "/",
    scope: "https://dailyniyam.vercel.app/",
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    description: "Jain niyams, pacchakan, aradhana for everyday purposes.",
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
