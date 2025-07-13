import headphonesImage from "../assets/headphones.jpeg";
import smartwatchImage from "../assets/smartwatch.jpeg";
import chargerImage from "../assets/charger.jpeg";
const sampleProducts = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    city: "Mumbai",
    price: 2299,
    quantityInStock: 20,
    requiredQuantity: 30,
    category: "Electronics",
    image: headphonesImage,
    trend: [12, 18, 24, 30, 28],
  },
  {
    id: 2,
    name: "Smartwatch X5",
    city: "Delhi",
    price: 5499,
    quantityInStock: 12,
    requiredQuantity: 25,
    category: "Wearables",
    image: smartwatchImage ,
    trend: [7, 10, 12, 15, 22],
  },
  {
    id: 3,
    name: "Portable Charger",
    city: "Bangalore",
    price: 899,
    quantityInStock: 35,
    requiredQuantity: 40,
    category: "Accessories",
    image: chargerImage,
    trend: [10, 12, 14, 20, 30],
  },
];

export default sampleProducts;



