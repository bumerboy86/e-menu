import {dataBaseInstans} from './instanses';


class BaseWorker {
    addProduct = async (name: string, picture: string, cost: number) => {
        try {
            const response = await dataBaseInstans.post(`products.json`, {name, picture, cost});
            return response.data;
        } catch (error) {
            throw new Error();
        }
    }

    getProducts = async () => {
        try {
            const response = await dataBaseInstans.get(`/products.json`);
            return response.data;
        } catch (error) {
            throw new Error();
        }
    }

    addOrder = async (data: string[]) => {
        try {
            const response = await dataBaseInstans.post(`orders.json`, data);
            return response.data;
        } catch (error) {
            throw new Error();
        }
    }

    getOrders = async () => {
        try {
            const response = await dataBaseInstans.get(`/orders.json`);
            return response.data;
        } catch (error) {
            throw new Error();
        }
    }

}

export const baseWorker = new BaseWorker();