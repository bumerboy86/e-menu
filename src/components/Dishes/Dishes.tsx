import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToBasket, costAmount, getProducts, summIncrement } from '../../store/products.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './Dishes.css';


const Dishes = () => {
  const myProducts = useAppSelector(state => state.magazine);
  const dispatch = useAppDispatch();

  const basketAdder = (name: string, cost: number) => {
      const check = myProducts.names.filter(key => key.name === name);
      if (check.length) {
        dispatch(costAmount(name));
        dispatch(summIncrement(cost));
      } else {
        dispatch(addToBasket({
          name,
          cost,
          amount: 1,
      }))
      dispatch(summIncrement(cost));
      }
    }
    
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch])

  return (
    <div className='dishes'>
    <h3 className='magMenu'>Menu <FontAwesomeIcon icon={ faFileAlt }></FontAwesomeIcon></h3>
    {myProducts && myProducts.products.map(key => {
      return (
        <div className='dish' key={key.id} onClick={() => basketAdder(key.name, key.cost)}>
            <p className='dishTxt'><FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon> {key.name}</p>
          <div className='dishName'>
            <span>{key.cost}</span>
            <div className='picture' style={{background: ` no-repeat url(${key.picture}) center/ cover`}}></div>
          </div>
        </div>
      )
    })}
  </div>
  )
}

export default Dishes;
