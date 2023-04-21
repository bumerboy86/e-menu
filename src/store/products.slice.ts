
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseWorker } from "../api/baseWorker";
import { INewProduct } from "../interfaces/INewProduct";
import { IOrder } from "../interfaces/IOrder";
import { IProductSlice } from "../interfaces/IProductSlice";
import { IResponceProduct } from "../interfaces/IResponceProduct";

const namespace = 'products';



export const addProduct = createAsyncThunk(
    `${namespace}/addProduct`,
    async (data: INewProduct) => {
        return await baseWorker.addProduct(data.name, data.picture, data.cost);
    }
)

export const addOrder = createAsyncThunk(
    `${namespace}/addOrder`,
    async (data: string[]) => {
        return await baseWorker.addOrder(data);
    }
)

export const getProducts = createAsyncThunk(
    `${namespace}/getProducts`,
    async () => {
        return await baseWorker.getProducts();
    }
)

export const getOrders = createAsyncThunk(
    `${namespace}/getOrders`,
    async () => {
        return await baseWorker.getOrders();
    }
)

const initialState: IProductSlice = {
    names: [],
    products: [],
    orders: [],
    summ: 250,
    delivery: true,
    modal: false,
    status: '#4efc10',
}

const productsSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {
        resetdishes (state) {
            state.names = [];
            state.delivery = true;
            state.summ =  250;
        },

        showModal (state) {
            state.modal = !state.modal;
        },

        deliveryActive(state) {
            if (state.delivery) {
                state.delivery = !state.delivery;
                state.summ -= 250;
            } else {
                state.delivery = !state.delivery;
                state.summ += 250;
            }
        },
        addToBasket (state, action) {
            state.names.push(action.payload);
        },

        costAmount (state, action) {
            state.names = [...state.names].map(key => {
                if (key.name === action.payload) {
                    key.amount+= 1;
                }
                return key})
        },

        takeAwayAmount (state, action) {
            const tempArr = [...state.names].map(key => {
                if (key.name === action.payload) {
                    if (key.amount >= 1) {
                        key.amount--;
                    }
                }
                return key
            }).filter(key => key.amount > 0);
            state.names = tempArr;
        },

        summIncrement (state, action) {
            state.summ += action.payload;
        },

        summDicrement (state, action) {
            state.summ -= action.payload;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(addProduct.pending, (state) => {
            state.status = '#2894e6';
        })
        .addCase(addProduct.rejected, (state) => {
            state.status = '#ec0505';
        })
        .addCase(addProduct.fulfilled, (state) => {
            state.status = '#4efc10';
        })

        .addCase(getProducts.pending, (state) => {
            state.status = '#2894e6';
        })
        .addCase(getProducts.rejected, (state) => {
            state.status = '#ec0505';
        })
        .addCase(getProducts.fulfilled, (state, action: PayloadAction<INewProduct>) => {
            if (action.payload !== undefined) {
                const tempArr: IResponceProduct[] = [];
                Object.entries(action.payload).forEach(key => {
                    const newKey = {...key[1], id: key[0]};
                    tempArr.push(newKey);
                })
                state.products = tempArr;
                state.status = '#4efc10';
            }
        })

        .addCase(addOrder.pending, (state) => {
            state.status = '#2894e6';
        })
        .addCase(addOrder.rejected, (state) => {
            state.status = '#ec0505';
        })
        .addCase(addOrder.fulfilled, (state) => {
            state.status = '#4efc10';

        })

        .addCase(getOrders.pending, (state) => {
            state.status = '#2894e6';
        })
        .addCase(getOrders.rejected, (state) => {
            state.status = '#ec0505';
        })
        .addCase(getOrders.fulfilled, (state, action: PayloadAction<IOrder>) => {
            if (action.payload !== undefined) {
                state.status = '#4efc10';
                state.orders = Object.entries(action.payload).map(key => {
                    return action.payload[key[0]];
                });
            }
        })
    }
})

export const { 
    addToBasket, costAmount, takeAwayAmount,
    resetdishes, summIncrement, summDicrement,
    deliveryActive, showModal,
 } = productsSlice.actions;
 
export default productsSlice.reducer;