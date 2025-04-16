export type RequestResponse<TData> = {
  Data: TData;
  Title: string;
  Status: number;
  //   ErrorList: null;
  IsSuccess: boolean;
};

export interface ShopInfo {
  Id: number;
  Name: string;
  Domain: string;
  LpDomain: string;
  Redirect: string;
}

export interface ProductDetail {
  Id: number;
  Name: string;
  Description: string;
  Code: null;
  Sku: null;
  Wazn: null;
  SPrice: number;
  Caprice: number;
  StockQuantity: number;
  NoQtySell: boolean;
  IsDiscounted: boolean;
  IsVariant: boolean;
  CoverImg: string;
  IsPreOrder: boolean;
  ProductImages: ProductImage[];
  ProductOptions: ProductOption[];
}

export interface ProductImage {
  Id: number;
  Position: number;
  Src: string;
}

export interface ProductOption {
  OptId: number;
  Position: number;
  CatId: number;
  CatName: string;
  Items: Item[];
}

export interface Item {
  Id: number;
  CatItemId: number;
  ItemName: string;
  BcolorHex: string;
  FcolorHex: string;
}

export interface RelatedProduct {
  Id: number;
  Name: string;
  Sprice: string;
  Caprice: string;
  Qty: number;
  NoQtySell: boolean;
  IsDiscounted: boolean;
  IsVariant: boolean;
  CoverImg: string;
}
