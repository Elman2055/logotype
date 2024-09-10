export type TProducts = {
  product_id: number;
  photo_preview: string;
  title: string;
  category: string;
  description: string;
  price: number;
};

export type TMain = {
  product?: TProducts[];
  firstRow: TProducts[];
  minimalism: TProducts[];
};

export type TCategory = {
  products: TProducts[];
  category: string;
};
