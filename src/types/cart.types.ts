export interface Author {
  _id: string;
  name: string;
  slug: string;
}

export interface Genre {
  _id: string;
  name: string;
  image: string;
  slug: string;
}

export interface Book {
  _id: string;
  title: string;
  slug: string;
  description: string;
  authors: Author[];
  genres: Genre[];
  published: Date;
  rating: number;
  price: number;
  discountedPrice: number;
  cover: string;
  discount: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
  totalPrice: number;
}