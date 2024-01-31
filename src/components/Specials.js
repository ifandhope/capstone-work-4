import bruchetta from "../images/bruchetta.svg";
import greekSalad from "../images/greekSalad.jpg";
import pasta from "../images/pasta.png";

const Specials = [
  {
    id: 1,
    title: "Bruchetta",
    price: 7.99,
    image: bruchetta,
    description:
      "Grilled bread with tomato, vegetables, beans, cured meat, or cheese.",
  },
  {
    id: 2,
    title: "Greek Salad",
    price: 10.99,
    image: greekSalad,
    description:
      "Greek oregano,tomatoes, cucumbers, onion, feta cheese, and fresh olives.",
  },
  {
    id: 3,
    title: "Basil Pasta",
    price: 15.99,
    image: pasta,
    description: "Oven baked with fresh tomato, basil, olives and pecorino.",
  },
];

export default Specials;
