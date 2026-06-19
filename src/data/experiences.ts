import potteryImg from "@/assets/craft-pottery.jpg";
import woodenImg from "@/assets/craft-wooden.jpg";
import crochetImg from "@/assets/craft-crochet.jpg";
import distilleryImg from "@/assets/craft-distillery.jpg";
import textileImg from "@/assets/craft-textile.jpg";
import handicraftImg from "@/assets/craft-handicraft.jpg";
import potCollection from "@/assets/pottery-collection.jpg";
import clayTexture from "@/assets/clay-texture.jpg";
import artisanRamlal from "@/assets/artisan-ramlal.jpg";
import artisanManjunath from "@/assets/artisan-manjunath.jpg";
import artisanAnya from "@/assets/artisan-anya.jpg";
import artisanIqbal from "@/assets/artisan-iqbal.jpg";
import artisanMary from "@/assets/artisan-mary.jpg";
import artisanBamboo from "@/assets/artisan-bamboo.jpg";
import storyTravelers from "@/assets/story-travelers.jpg";
import storyWorkshop from "@/assets/story-workshop.jpg";
import loginExperience from "@/assets/login-experience.jpg";

export const images = {
  potteryImg,
  woodenImg,
  crochetImg,
  distilleryImg,
  textileImg,
  handicraftImg,
  potCollection,
  clayTexture,
  artisan: artisanRamlal,
  artisanRamlal,
  artisanManjunath,
  artisanAnya,
  artisanIqbal,
  artisanMary,
  artisanBamboo,
  storyTravelers,
  storyWorkshop,
  loginExperience,
};

export type Experience = {
  slug: string;
  title: string;
  category: "Pottery" | "Wooden Toys" | "Crochet" | "Distillery" | "Textile" | "Handicrafts";
  city: string;
  duration: string;
  price: number;
  image: string;
  artisanImage?: string;
  artisan: string;
  artisanYears: number;
  excerpt: string;
  story: string;
  learn: string[];
  slots: string[];
  tags?: ("Traditional" | "Modern" | "Cultural" | "Hands-on" | "Weekend")[];
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
    tags: ["Traditional", "Hands-on", "Cultural"],
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
    tags: ["Traditional", "Hands-on", "Weekend"],
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
    tags: ["Modern", "Hands-on", "Weekend"],
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
    tags: ["Cultural", "Traditional", "Hands-on"],
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
    tags: ["Traditional", "Cultural"],
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
    tags: ["Traditional", "Cultural", "Hands-on"],
  },
];

export const experiencesExtra: Experience[] = [
  {
    slug: "goa-feni-distillery",
    title: "Cashew Feni Distillery Walk",
    category: "Distillery",
    city: "Goa",
    duration: "3 hours",
    price: 2400,
    image: potCollection,
    artisan: "Joaquim Fernandes",
    artisanYears: 31,
    excerpt: "Walk a hillside distillery in old Goa. Crush, ferment, and taste the country's only heritage spirit.",
    story: "Joaquim's family has distilled feni from cashew apples for four generations. The copper pots, he says, remember every monsoon.",
    learn: [
      "The harvest and pressing of cashew apples",
      "Triple-distillation in earthen and copper pots",
      "Tasting notes across single, double, and aged feni",
      "The Indo-Portuguese roots of Goan distilling",
    ],
    slots: ["10:00 — 13:00", "15:00 — 18:00"],
    tags: ["Cultural", "Modern", "Weekend"],
  },
  {
    slug: "goa-craft-brew",
    title: "Coastal Craft Brew Workshop",
    category: "Distillery",
    city: "Goa",
    duration: "3 hours",
    price: 2200,
    image: clayTexture,
    artisan: "Anya D'Souza",
    artisanYears: 9,
    excerpt: "A small Panjim brewery opens its mash tun. Brew a bottle of beer flavoured with kokum and curry leaf.",
    story: "Anya left a corporate desk to brew along the Mandovi. She blends Belgian technique with Goan botanicals.",
    learn: [
      "Mashing, sparging, and the brewer's clock",
      "Choosing hops and local botanicals",
      "Bottling your own labelled brew to take home",
      "The new wave of Indian craft beer",
    ],
    slots: ["11:00 — 14:00", "16:00 — 19:00"],
    tags: ["Modern", "Hands-on", "Weekend"],
  },
  {
    slug: "delhi-handblock-textile",
    title: "Hand-block Printed Textile",
    category: "Textile",
    city: "Delhi",
    duration: "3 hours",
    price: 1900,
    image: crochetImg,
    artisan: "Iqbal Khatri",
    artisanYears: 36,
    excerpt: "In a Shahpur Jat lane, carve a wooden block and print a scarf in indigo and madder.",
    story: "Iqbal carries the bagru tradition into Delhi's quiet courtyards. He prints, he says, the way his grandfather sang — without rushing.",
    learn: [
      "Reading and carving a small wooden block",
      "Mixing natural indigo and madder",
      "Registering and printing a length of cotton",
      "The textile geography of north India",
    ],
    slots: ["10:00 — 13:00", "14:30 — 17:30"],
    tags: ["Traditional", "Cultural", "Hands-on"],
  },
  {
    slug: "delhi-crochet-circle",
    title: "Old Delhi Crochet Circle",
    category: "Crochet",
    city: "Delhi",
    duration: "3 hours",
    price: 1500,
    image: crochetImg,
    artisan: "Razia Begum",
    artisanYears: 27,
    excerpt: "A haveli rooftop, Chandni Chowk below. Crochet with the women's circle that meets here every Sunday.",
    story: "Razia's circle has met for twelve years. They teach, gossip, and stitch — in roughly that order.",
    learn: [
      "The basic stitches taught at the circle",
      "Reading a small motif from end to end",
      "Finishing a coaster or pouch you'll keep",
      "The unwritten history of Delhi's craft circles",
    ],
    slots: ["10:00 — 13:00", "15:00 — 18:00"],
    tags: ["Modern", "Cultural", "Weekend"],
  },
  {
    slug: "jaipur-wooden-puppet",
    title: "Kathputli Puppet Carving",
    category: "Wooden Toys",
    city: "Jaipur",
    duration: "3 hours",
    price: 1700,
    image: woodenImg,
    artisan: "Bhanwar Bhat",
    artisanYears: 44,
    excerpt: "Carve and paint a small Rajasthani string puppet — a craft kept alive by a single colony in Jaipur.",
    story: "Bhanwar's family has carved kathputli for seven generations. Each puppet, he says, learns its dance from the carver's hands.",
    learn: [
      "Carving a small puppet head from mango wood",
      "Painting the bold kathputli features",
      "Stringing for movement and balance",
      "The folk theatre tradition of Rajasthan",
    ],
    slots: ["09:00 — 12:00", "14:00 — 17:00"],
    tags: ["Traditional", "Cultural", "Hands-on"],
  },
];

experiences.push(...experiencesExtra);

export const cities = ["Jaipur", "Bengaluru", "Pondicherry", "Visakhapatnam", "Srinagar", "Udaipur", "Goa", "Delhi"];
export const categories = ["Pottery", "Wooden Toys", "Crochet", "Distillery", "Textile", "Handicrafts"] as const;

export type CityCulture = {
  city: string;
  tagline: string;
  signature: string[];
  image: string;
};

export const cityCultures: CityCulture[] = [
  { city: "Jaipur", tagline: "The pink city of clay & cobalt", signature: ["Pottery", "Blue Pottery", "Wooden Toys"], image: potteryImg },
  { city: "Goa", tagline: "Coastal stills & craft brews", signature: ["Feni Distillery", "Craft Beer"], image: potCollection },
  { city: "Delhi", tagline: "Lanes of textile & handicraft", signature: ["Handblock Print", "Crochet"], image: crochetImg },
  { city: "Bengaluru", tagline: "Lacquer & lathe traditions", signature: ["Channapatna Toys"], image: woodenImg },
  { city: "Srinagar", tagline: "Walnut wood & chinar wool", signature: ["Kashmiri Crochet"], image: crochetImg },
  { city: "Pondicherry", tagline: "Slow afternoons by the sea", signature: ["Crochet"], image: crochetImg },
];
