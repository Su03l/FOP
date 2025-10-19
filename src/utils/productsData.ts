import helmetWhite from "../assets/images/helmets/helmet-white.png";
import blueHelmet from "../assets/images/helmets/blue-helmet.png";
import greenHelmet from "../assets/images/helmets/green-helmet.png";
import redHelmet from "../assets/images/helmets/red-helmet.png";
import yellowHelmet from "../assets/images/helmets/yellow-helmet.png";

export interface Product {
  fopId: string;
  productId: string;
  suspensionType: "Ratchet" | "Pinlock";
  sweatband: "Plastic" | "Leather";
  colour: string;
  moq: number;
  image: string;
}

export const productsData: Product[] = [
  {
    fopId: "FOP1001",
    productId: "FOP–H100–OR",
    suspensionType: "Ratchet",
    sweatband: "Plastic",
    colour: "Orange",
    moq: 20,
    image: redHelmet, // Using red as orange placeholder
  },
  {
    fopId: "FOP1002",
    productId: "FOP–H100–RD",
    suspensionType: "Ratchet",
    sweatband: "Plastic",
    colour: "Red",
    moq: 20,
    image: redHelmet,
  },
  {
    fopId: "FOP1003",
    productId: "FOP–H100–GN",
    suspensionType: "Ratchet",
    sweatband: "Plastic",
    colour: "Green",
    moq: 20,
    image: greenHelmet,
  },
  {
    fopId: "FOP1004",
    productId: "FOP–H100–BL",
    suspensionType: "Ratchet",
    sweatband: "Plastic",
    colour: "Blue",
    moq: 20,
    image: blueHelmet,
  },
  {
    fopId: "FOP1005",
    productId: "FOP–H100–YL",
    suspensionType: "Ratchet",
    sweatband: "Plastic",
    colour: "Yellow",
    moq: 20,
    image: yellowHelmet,
  },
  {
    fopId: "FOP1006",
    productId: "FOP–H100–WH",
    suspensionType: "Ratchet",
    sweatband: "Plastic",
    colour: "White",
    moq: 20,
    image: helmetWhite,
  },
  {
    fopId: "FOP1007",
    productId: "FOP–H100–LR",
    suspensionType: "Ratchet",
    sweatband: "Leather",
    colour: "White",
    moq: 20,
    image: helmetWhite,
  },
  {
    fopId: "FOP1008",
    productId: "FOP–H100–PL",
    suspensionType: "Pinlock",
    sweatband: "Plastic",
    colour: "Yellow",
    moq: 20,
    image: yellowHelmet,
  },
  {
    fopId: "FOP1009",
    productId: "FOP–H100–LL",
    suspensionType: "Pinlock",
    sweatband: "Leather",
    colour: "Blue",
    moq: 20,
    image: blueHelmet,
  },
];
