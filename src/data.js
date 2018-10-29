import image0 from './images/0.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';

export const categories = [
  {
    id: 0,
    name: '',
    description: "All items"
   },
  {
    id: 1,
    name: "pants",
    description: "Jeans and pants"
   },
   {
    id: 2,
    name: "tops",
    description: "Tops & shirts"
   }
];

export const clothes = [
  {
    id: 0,
    name: "brown pants",
    image: image0,
    description: "casual brown pants",
    category: "pants",
    target: "menswear"
  },
  {
    id: 1,
    name: "blue pants",
    image: image1,
    description: "casual blue pants",
    category: "pants",
    target: "menswear"
  },
  {
    id: 2,
    name: "blue jeans",
    image: image2,
    description: "ripped blue jeans",
    category: "pants",
    target: "womenswear"
  },
  {
    id: 3,
    name: "lightblue jeans",
    image: image3,
    description: "light blue skinny jeans",
    category: "pants",
    target: "womenswear"
  },
  {
    id: 4,
    name: "blue pants",
    image: image4,
    description: "navy blue wide pants",
    category: "pants",
    target: "womenswear"
  },
  {
    id: 5,
    name: "printed pants",
    image: image5,
    description: "wide black pants with geometric print",
    category: "pants",
    target: "womenswear"
  },
  {
    id: 6,
    name: "blue shirt",
    image: image6,
    description: "casual light blue shirt",
    category: "tops",
    target: "menswear"
  },
  {
    id: 7,
    name: "navy t-shirt",
    image: image7,
    description: "navy blue t-shirt",
    category: "tops",
    target: "menswear"
  },
  {
    id: 8,
    name: "white t-shirt",
    image: image8,
    description: "white t-shirt with a print",
    category: "tops",
    target: "menswear"
  },
  {
    id: 9,
    name: "beige sweater",
    image: image9,
    description: "beige cashmere sweater",
    category: "tops",
    target: "womenswear"
  },
  {
    id: 10,
    name: "white top",
    image: image10,
    description: "basic white top with thin straps",
    category: "tops",
    target: "womenswear"
  }
];