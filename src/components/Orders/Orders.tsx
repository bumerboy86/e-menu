import  { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getOrders } from '../../store/products.slice';
import './Orders.css';

const Orders = () => {
  const dispatch = useAppDispatch();
  const myOrders = useAppSelector(state => state.magazine);
  const orders = myOrders.orders;

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (<div>
    
     {Object.keys(orders).map((key: string) => {
        return <ol key={key}>
            <p>`Order: {key}`</p>
            {orders[key].map((order: string, i: number) => {
              return <li key={i}>
                  {order}
              </li>
            })}
          </ol>
      })}
  </div>)
}

export default Orders;