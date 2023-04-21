import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deliveryActive, showModal, summDicrement, takeAwayAmount } from '../../store/products.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCutlery } from '@fortawesome/free-solid-svg-icons';
import './Basket.css';

const Basket = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.magazine);

    const delDishes = (data: string, cost: number) => {
        dispatch(takeAwayAmount(data));
        dispatch(summDicrement(cost));
      }
    const deliveryHandler = () => {
        dispatch(deliveryActive());
    }

    const showModalHandler = () => {
        dispatch(showModal());
    }

  return (
    <div className='basket'>
        <h3>Basket <FontAwesomeIcon icon={ faShoppingBasket }></FontAwesomeIcon></h3>
        <div className='deliveryBox'>
            <p>Delivery: 250 kzt</p>
            <input type="checkbox" name="delivery" id="delivery"  checked={state.delivery} onChange={deliveryHandler}/>
        </div>
        <p className='basketSumm'>Total price: {state.summ} kzt</p>
        {state.names.length ? <button className='orderBtn' onClick={showModalHandler}>Place order</button> : <></>}
        <div className='basketBody'>
          {state && state.names.map(key => {
              return (
                <div className='dishesCheck' key={key.name} onClick={() => delDishes(key.name, key.cost)}>
                    <p className='text'>{key.name} <FontAwesomeIcon icon={faCutlery}></FontAwesomeIcon></p>
                    <p className='text'>Кол-во: {key.amount}</p>
                    </div>
              )
          })}
        </div>
        </div>
  )
}

export default Basket;
