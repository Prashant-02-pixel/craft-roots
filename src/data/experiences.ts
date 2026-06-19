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
    artisanImage: artisanRamlal,
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
    artisanImage: artisanManjunath,
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
    artisanImage: artisanMary,
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
    artisanImage: artisanRamlal,
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
    artisanImage: artisanManjunath,
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
    artisanImage: artisanMary,
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
    image: distilleryImg,
    artisanImage: artisanAnya,
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
    image: distilleryImg,
    artisanImage: artisanAnya,
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
    image: textileImg,
    artisanImage: artisanIqbal,
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
    artisanImage: artisanMary,
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
    artisanImage: artisanManjunath,
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

export const handicraftExperiences: Experience[] = [
  {
    slug: "assam-bamboo-craft",
    title: "Bamboo Weaving by the Brahmaputra",
    category: "Handicrafts",
    city: "Guwahati",
    duration: "3 hours",
    price: 1600,
    image: handicraftImg,
    artisanImage: artisanBamboo,
    artisan: "Dipak Boro",
    artisanYears: 33,
    excerpt: "Split, soak, and weave bamboo into a small basket along the riverbank where the craft has lived for centuries.",
    story: "Dipak's village has woven bamboo since before the road came. He weaves to the rhythm of the river — slowly, and without explanation.",
    learn: ["Splitting and treating raw bamboo", "Reading the simple over-under weave", "Finishing edges with cane", "The bamboo ecology of the Northeast"],
    slots: ["09:00 — 12:00", "14:00 — 17:00"],
    tags: ["Traditional", "Hands-on", "Cultural"],
  },
  {
    slug: "molela-terracotta",
    title: "Molela Terracotta Plaques",
    category: "Handicrafts",
    city: "Udaipur",
    duration: "3 hours",
    price: 1800,
    image: clayTexture,
    artisanImage: artisanRamlal,
    artisan: "Mohanlal Kumhar",
    artisanYears: 41,
    excerpt: "Shape a votive terracotta plaque the way Molela's families have for eight hundred years.",
    story: "Mohanlal still digs his clay from the same pond his great-grandfather did. He fires under the open sky.",
    learn: ["Wedging and slab-rolling local clay", "Modelling a small relief figure", "Open-air firing traditions", "The Molela votive tradition"],
    slots: ["08:00 — 11:00", "15:00 — 18:00"],
    tags: ["Traditional", "Cultural", "Hands-on"],
  },
  {
    slug: "moradabad-brass",
    title: "Brass Engraving in Moradabad",
    category: "Handicrafts",
    city: "Delhi",
    duration: "3 hours",
    price: 2100,
    image: handicraftImg,
    artisanImage: artisanIqbal,
    artisan: "Salim Ansari",
    artisanYears: 38,
    excerpt: "In a small brass studio, learn the chiselled vine-work that made Moradabad famous from London to Tokyo.",
    story: "Salim's family has engraved brass for five generations. His chisels are older than he is.",
    learn: ["Reading the floral repeats", "Holding and tapping the chisel", "Polishing and patinating brass", "The export history of the craft"],
    slots: ["10:00 — 13:00", "14:30 — 17:30"],
    tags: ["Traditional", "Hands-on", "Cultural"],
  },
  {
    slug: "andhra-leather-puppetry",
    title: "Tholu Bommalata Leather Puppets",
    category: "Handicrafts",
    city: "Visakhapatnam",
    duration: "3 hours",
    price: 1900,
    image: handicraftImg,
    artisanImage: artisanBamboo,
    artisan: "Chidambara Rao",
    artisanYears: 47,
    excerpt: "Paint a translucent leather puppet from the Andhra shadow-theatre tradition — and watch it dance against a lamp.",
    story: "Chidambara still performs at village temples. The puppets, he says, only come alive once the lamp is lit.",
    learn: ["Cutting and curing goat-leather", "Painting natural pigments", "Articulating limbs with bamboo rods", "The Tholu Bommalata stories"],
    slots: ["10:00 — 13:00", "16:00 — 19:00"],
    tags: ["Traditional", "Cultural"],
  },
];

experiences.push(...handicraftExperiences);

export const cities = ["Jaipur", "Bengaluru", "Pondicherry", "Visakhapatnam", "Srinagar", "Udaipur", "Goa", "Delhi", "Guwahati"];
export const categories = ["Pottery", "Wooden Toys", "Crochet", "Distillery", "Textile", "Handicrafts"] as const;

export type CityCulture = {
  city: string;
  tagline: string;
  signature: string[];
  image: string;
};

export const cityCultures: CityCulture[] = [
  { city: "Jaipur", tagline: "The pink city of clay & cobalt", signature: ["Pottery", "Blue Pottery", "Wooden Toys"], image: potteryImg },
  { city: "Goa", tagline: "Coastal stills & craft brews", signature: ["Feni Distillery", "Craft Beer"], image: distilleryImg },
  { city: "Delhi", tagline: "Lanes of textile & handicraft", signature: ["Handblock Print", "Brass Craft"], image: textileImg },
  { city: "Bengaluru", tagline: "Lacquer & lathe traditions", signature: ["Channapatna Toys"], image: woodenImg },
  { city: "Srinagar", tagline: "Walnut wood & chinar wool", signature: ["Kashmiri Crochet"], image: artisanMary },
  { city: "Pondicherry", tagline: "Slow afternoons by the sea", signature: ["Crochet"], image: crochetImg },
  { city: "Guwahati", tagline: "Bamboo, river, & green hills", signature: ["Bamboo Craft"], image: handicraftImg },
];

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  review: string;
};

export const testimonialsByCategory: Record<Experience["category"], Testimonial[]> = {
  Pottery: [
    { name: "Aanya Sharma", city: "Mumbai", rating: 5, review: "Three hours flew by. I left with clay under my fingernails and a small pot I still keep on my desk." },
    { name: "Daniel Whitfield", city: "London", rating: 5, review: "The most grounded afternoon of my India trip. Ramlal teaches without saying much — and you learn anyway." },
    { name: "Priya Menon", city: "Bangalore", rating: 4, review: "A meditative, beautiful experience. Worth every rupee for the story alone." },
  ],
  "Wooden Toys": [
    { name: "Karthik Iyer", city: "Chennai", rating: 5, review: "Manjunath let me try the lathe. My toy is wobbly and I love it. Took a piece of Channapatna home." },
    { name: "Sofia Romano", city: "Milan", rating: 5, review: "I had no idea this craft existed. The lacquer colours are unreal. Highly recommend." },
    { name: "Ravi Sundaram", city: "Hyderabad", rating: 4, review: "Wonderful for families. My kids still talk about painting their wooden bird." },
  ],
  Crochet: [
    { name: "Lakshmi Pillai", city: "Kochi", rating: 5, review: "Slow afternoon, warm tea, soft yarn. I made a coaster and a friend." },
    { name: "Emma Larsson", city: "Stockholm", rating: 5, review: "Sister Mary's window seat is the most peaceful place I sat in all of India." },
    { name: "Tara Kapoor", city: "Delhi", rating: 4, review: "Lovely teacher, honest pace. I picked the craft back up after years." },
  ],
  Distillery: [
    { name: "Marco Alves", city: "Lisbon", rating: 5, review: "Tasted feni straight from the still. The Indo-Portuguese story made the whole afternoon." },
    { name: "Nikhil Rao", city: "Pune", rating: 4, review: "Anya is brilliant — half scientist, half storyteller. Bottled my own beer." },
    { name: "Hannah Chen", city: "Singapore", rating: 5, review: "Easily the most unexpected workshop I've done. The copper stills alone are worth it." },
  ],
  Textile: [
    { name: "Meera Joshi", city: "Ahmedabad", rating: 5, review: "Carved my own block and printed a scarf I'll keep forever. Iqbal is the real deal." },
    { name: "James Hartley", city: "Brisbane", rating: 5, review: "The smell of indigo, the rhythm of the printing — everything about it was perfect." },
    { name: "Sneha Reddy", city: "Hyderabad", rating: 4, review: "Beautifully run. I now look at fabric differently." },
  ],
  Handicrafts: [
    { name: "Riya Saikia", city: "Guwahati", rating: 5, review: "Dipak's bamboo basket workshop felt like being adopted by a village for an afternoon." },
    { name: "Lucas Müller", city: "Berlin", rating: 5, review: "Engraving brass with Salim was the highlight of my Delhi week. Real craft, no theatrics." },
    { name: "Ananya Bose", city: "Kolkata", rating: 4, review: "A side of India I'd never seen. Warm, slow, and beautifully taught." },
  ],
};
