import { Chaityavandans } from "./chaityavandans";
import { Stavans } from "./stavans";
import {
  Annath,
  Arihantecheiyanam,
  Iryavahiyam,
  Jankinchi,
  Javanticheiam,
  Javantkevisahu,
  Jayviyaraya,
  Khamasaman,
  Logass,
  Namorhat,
  Namutthunam,
  Tassuttari,
} from "./sutras";
import { Thoys } from "./thoys";

export const MandirVidhis = [
  {
    heading: "प्रदक्षिणा दोहा",
    title: "प्रदक्षिणा दोहा | Pradakshina doha",
    slug: "/pradakshina-doha",
  },
  {
    heading: "नवआंगी पूजा",
    title: "नवआंगी पूजा | Nav angi puja",
    slug: "/navaangi-puja",
  },
  {
    heading: "अष्टप्रकारी पूजन",
    title: "अष्टप्रकारी पूजन | Ashtaprakari pujan",
    slug: "/ashtaprakari-puja",
  },
  {
    heading: "चैत्यवंदन विधि",
    title: "चैत्यवंदन विधि | Chaityavandan vidhi",
    slug: "/chaitya-vandan",
    randomize: true,
    steps: [
      Khamasaman,
      Iryavahiyam,
      Tassuttari,
      Annath,
      "(1 लोगस्स ना आये तो 4 नवकार का काउसग्ग )",
      Logass,
      Khamasaman,
      Khamasaman,
      Khamasaman,
      // Add a random chaityavandan
      (val) => Chaityavandans[val]?.slug,
      Jankinchi,
      Namutthunam,
      Javanticheiam,
      Khamasaman,
      Javantkevisahu,
      Namorhat,
      // Add a random stavan or uvasaggaharam
      (val) => Stavans.find((s) => s.slug === `/${val}`).slug,
      Jayviyaraya,
      Arihantecheiyanam,
      Annath,
      "(1 नवकार का काउसग्ग थोय सुन के पारना)",
      // Add a random thoy
      (val) => Thoys[val].slug,
      Khamasaman,
    ],
  },
  {
    heading: "स्नात्र पूजा",
    title: "स्नात्र पूजा | Snatra puja",
    slug: "/snatra-puja",
  },
  {
    heading: "शांति कलश",
    title: "शांति कलश | Shanti kalash",
    slug: "/shanti-kalash",
  },

  {
    heading: "देववंदन विधि",
    title: "देववंदन विधि | Dev vandan vidhi",
    slug: "/dev-vandan",
  },
];
