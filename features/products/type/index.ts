export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type Category = {
  name: string;
  checked: boolean;
};

export type Prices = {
  minPrice?: number;
  maxPrice?: number;
  selectedMinPrice?: number;
  selectedMaxPrice?: number;
};
