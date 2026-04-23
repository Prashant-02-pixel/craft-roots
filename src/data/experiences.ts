import potteryImg from "@/assets/hero-pottery.jpg";
import woodenImg from "@/assets/wooden-toys.jpg";
import crochetImg from "@/assets/crochet.jpg";
import potCollection from "@/assets/pottery-collection.jpg";
import artisan from "@/assets/artisan-portrait.jpg";
import clayTexture from "@/assets/clay-texture.jpg";

export const images = { potteryImg, woodenImg, crochetImg, potCollection, artisan, clayTexture };

export type Experience = {
  slug: string;
  title: string;
  category: "Pottery" | "Wooden Toys" | "Crochet";
  city: string;
  duration: string;
  price: number;
  image: string;
  artisan: string;
  artisanYears: number;
  excerpt: string;
  story: string;
  learn: string[];
  slots: string[];
};

export const experiences: Experience[] = [
  {
    slug: "make-your-own-clay-pot",
    title: "Make Your Own Clay Pot",
    category: "Pottery",
    city: "Jaipur",
    duration: "3 hours",
    price: 1800,
    image: potteryImg,
    artisan: "Ramlal Prajapati",
    artisanYears: 52,
    excerpt: "Sit at the wheel that has spun for three generations. Shape clay drawn from the same riverbank his grandfather knew.",
    story: "Ramlal began turning the wheel at the age of nine, in a small courtyard outside Jaipur where the smell of wet earth was as familiar as morning tea. Today, his hands carry the memory of half a century — and yet each pot, he says, is the first one.",
    learn: [
      "Centering and opening clay on the traditional kick-wheel",
      "Pulling walls to shape a vessel of your own",
      "Trimming, signing, and preparing your piece for firing",
      "The quiet philosophy of imperfection in craft",
    ],
    slots: ["07:00 — 10:00", "11:00 — 14:00", "15:30 — 18:30"],
  },
  {
    slug: "channapatna-wooden-toys",
    title: "Carve a Channapatna Toy",
    category: "Wooden Toys",
    city: "Bengaluru",
    duration: "3 hours",
    price: 2200,
    image: woodenImg,
    artisan: "Manjunath B.",
    artisanYears: 38,
    excerpt: "A 200-year-old craft, lacquered in lac and turned on a humble lathe. Take home the toy you carved by hand.",
    story: "In Channapatna, the lathe sings before sunrise. Manjunath learned at his father's bench, where wood and lac were the language of the family. Each toy he turns carries a name — and a long, quiet patience.",
    learn: [
      "Selecting and shaping ivory-wood on a hand-lathe",
      "Applying natural lac in glowing earth-tones",
      "Sanding to the soft finish Channapatna is loved for",
      "The history of a craft once protected by kings",
    ],
    slots: ["09:00 — 12:00", "14:00 — 17:00"],
  },
  {
    slug: "crochet-an-heirloom",
    title: "Crochet a Soft Heirloom",
    category: "Crochet",
    city: "Pondicherry",
    duration: "3 hours",
    price: 1500,
    image: crochetImg,
    artisan: "Sister Mary Rose",
    artisanYears: 41,
    excerpt: "A slow afternoon by the colonial windows. Cream wool, warm tea, and a small piece you'll keep for years.",
    story: "Sister Mary learned crochet from the women of her village, then carried it across the country. She believes that to crochet is to listen — to your hands, to the weather, to yourself.",
    learn: [
      "Holding the hook and tensioning yarn with ease",
      "Foundation, single, and double crochet stitches",
      "Reading a small pattern from start to finish",
      "Finishing your piece — a coaster or small pouch",
    ],
    slots: ["10:00 — 13:00", "15:00 — 18:00"],
  },
  {
    slug: "blue-pottery-of-jaipur",
    title: "Blue Pottery of Jaipur",
    category: "Pottery",
    city: "Jaipur",
    duration: "3 hours",
    price: 2000,
    image: potCollection,
    artisan: "Naseema Bano",
    artisanYears: 29,
    excerpt: "A craft of cobalt and quartz, carried from Persia to the pink city. Paint a tile that will outlast you.",
    story: "Naseema's mother painted blue pottery by lantern-light. Naseema paints by the same window today — slower, she says, than the world around her, and quite happily so.",
    learn: [
      "The unique quartz-paste of Jaipur blue pottery",
      "Mixing cobalt and copper-oxide pigments",
      "Brushwork: vines, flowers, geometric repeats",
      "Glazing and the kiln tradition",
    ],
    slots: ["08:00 — 11:00", "13:00 — 16:00"],
  },
  {
    slug: "etikoppaka-toys",
    title: "Etikoppaka Lacquer Toys",
    category: "Wooden Toys",
    city: "Visakhapatnam",
    duration: "3 hours",
    price: 1900,
    image: woodenImg,
    artisan: "Sri Venkatesh",
    artisanYears: 34,
    excerpt: "Soft Ankudu wood, vegetable dyes, and a craft the village has kept whole for four hundred years.",
    story: "In Etikoppaka, the toys are painted with seeds, leaves, and roots. Venkatesh keeps a small garden of them behind his workshop.",
    learn: [
      "Turning soft Ankudu wood by hand",
      "Mixing natural plant-based dyes",
      "Shaping a small figurine from start to finish",
      "The ecology behind a 400-year-old craft",
    ],
    slots: ["09:00 — 12:00", "14:30 — 17:30"],
  },
  {
    slug: "kashmiri-crochet-shawl",
    title: "Kashmiri Crochet Motif",
    category: "Crochet",
    city: "Srinagar",
    duration: "3 hours",
    price: 1700,
    image: crochetImg,
    artisan: "Shaheena Akhtar",
    artisanYears: 22,
    excerpt: "By a window of carved walnut, learn the chinar-leaf motif passed quietly between mothers and daughters.",
    story: "Shaheena learned the chinar-leaf from her mother, who learned it from hers. She teaches it the way she was taught — slowly, with cups of kahwa between rows.",
    learn: [
      "The chinar-leaf and almond motifs",
      "Working with fine Kashmiri wool",
      "Reading repeating regional patterns",
      "Finishing a small motif of your own",
    ],
    slots: ["10:00 — 13:00", "14:00 — 17:00"],
  },
];

export const cities = ["Jaipur", "Bengaluru", "Pondicherry", "Visakhapatnam", "Srinagar", "Udaipur"];
export const categories = ["Pottery", "Wooden Toys", "Crochet"] as const;
