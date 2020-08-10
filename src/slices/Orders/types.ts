export { }
declare global {
  interface ItemType {
    id: string;
    product: ProductType;
    quantity: number;
  }
  interface OrderType {
    id: string;
    items: ItemType[];
    address: string;
    shipPrice?: number;
    total: number;
  }

}

