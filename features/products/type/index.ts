export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
  };
};

export type Category = {
  name: string;
  checked: boolean;
};

export type Prices = {
  maxPrice?: number;
  selectedMinPrice?: number;
  selectedMaxPrice?: number;
};

export type Ratings = {
  selectedMinRating?: number;
  selectedMaxRating?: number;
};
