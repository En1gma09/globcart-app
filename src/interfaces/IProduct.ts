export interface IProductData {
    data: Array<IProduct>;
  }

export default interface IProduct {
    productId?: string;
    productName?: string;
    unitPrice?: number;
}