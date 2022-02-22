export interface IProductItem {
  categoryId?: string;
  id?: string;
  name?: string;
  price?: number;
  code?: number;
  starRating?: number;
  description?: string;
  imgUrl?: string;
  color?: string;
  brand?: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface IProductList {
  items: IProductItem[];
  isLoading: boolean;
  isLoaded: boolean;
  errorMsg: string;
}

export interface IRecommendProductList {
  items: IProductItem[];
  isLoading: boolean;
  isLoaded: boolean;
  errorMsg: string;
}

export interface IItem {
  item: IProductItem;
  isLoading: boolean;
  isLoaded: boolean;
  errorMsg: string;
}

export interface IProductState {
  productList: IProductList;
  productItem: IItem;
  recommendProductList: IRecommendProductList;
}
