import { IBasket } from "./IBasket";
import { IResponceProduct } from "./IResponceProduct";

export interface IProductSlice {
    names: IBasket[],
    products: IResponceProduct[],
    orders: any,
    summ: number,
    delivery: boolean,
    modal: boolean,
    status: string,
}