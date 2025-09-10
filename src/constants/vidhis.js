import { Chaityavandans } from "./chaityavandans";
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
  Uvasaggaharm,
} from "./sutras";
import { Thoys } from "./thoys";

export const MandirVidhis = [
  {
    title: "चैत्यवंदन विधि",
    slug: "/chaitya-vandan",
    steps: [
      Khamasaman,
      Iryavahiyam,
      Tassuttari,
      Annath,
      "1 logass nahi aaye to 4 Navkar",
      Logass,
      Khamasaman,
      Khamasaman,
      Khamasaman,
      // Add a random chaityavandan
      [Chaityavandans],
      Jankinchi,
      Namutthunam,
      Javanticheiam,
      Khamasaman,
      Javantkevisahu,
      Namorhat,
      // Add a random stavan or uvasaggaharam
      [Uvasaggaharm],
      Jayviyaraya,
      Arihantecheiyanam,
      Annath,
      "1 navkar ka kausagg thoy sun ke paarna",
      // Add a random thoy
      [Thoys],
      Khamasaman,
    ],
  },
  {
    title: "देववंदन विधि",
    slug: "/dev-vandan",
  },
  {
    title: "प्रदिक्षणा दोहा",
    slug: "/pradakshina-doha",
  },
  {
    title: "अष्टप्रकारी पूजन",
    slug: "/ashtaprakari-puja",
  },
  {
    title: "स्नात्र पूजा",
    slug: "/snatra-puja",
  },
  {
    title: "नवआंगी पूजा",
    slug: "/navaangi-puja",
  },
  {
    title: "शांति कलश",
    slug: "/shanti-kalash",
  },
];
