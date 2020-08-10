export { }

declare global {
  interface ProductType {
    id: string;
    name: string;
    price: number;
    description?: string;
  }
}