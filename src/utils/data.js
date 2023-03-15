import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";
import F2 from "../img/f2.png";
import F8 from "../img/f8.png";
import F10 from "../img/f10.png";
import F6 from "../img/f6.png";
import F9 from "../img/f9.png";

export const heroData = [
  { id : 1,
    name : 'Icecream',
    decp : 'Chocolate & Vanilla',
    price : '75',
    imageSrc : I1
  },
  { id : 2,
    name : 'Strawberries',
    decp : 'Fresh Strawberries',
    price : '85',
    imageSrc : F1
  },
  { id : 3,
    name : 'Chicken Kebab',
    decp : 'Mixed Kebab Plate',
    price : '250',
    imageSrc : C3
  },
  { id : 4,
    name : 'Fish Kebab',
    decp : 'Chocolate & Vanilla',
    price : '15',
    imageSrc : Fi1
  }
];

export const fruitData = [
  { id : 1,
    title : 'Strawberry',
    calories : '45',
    price : '65',
    imageURL : F1,
    quantity : '1'
  },
  { id : 2,
    title : 'Pineapple',
    calories : '50',
    price : '70',
    imageURL : F2,
    quantity : '1'
  },
  { id : 3,
    title : 'Grapes',
    calories : '55',
    price : '80',
    imageURL : F8,
    quantity : '1'
  },
  { id : 4,
    title : 'Watermelon',
    calories : '30',
    price : '50',
    imageURL : F10,
    quantity : '1'
  },
  { id : 5,
    title : 'Pomegranate',
    calories : '200',
    price : '7',
    imageURL : F6,
    quantity : '1'
  },
  { id : 6,
    title : 'Banana',
    calories : '30',
    price : '6',
    imageURL : F9,
    quantity : '1'
  }
];

export const categories = [
  {
    id: 1,
    name: "Vegetables",
    urlParamName: "vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 3,
    name: "Icecreams",
    urlParamName: "icecreams",
  },
  {
    id: 4,
    name: "Kebabs",
    urlParamName: "kebabs",
  }
];