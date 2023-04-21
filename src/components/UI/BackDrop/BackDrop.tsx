import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addOrder, resetdishes, showModal } from '../../../store/products.slice';
import './BackDrop.css';

const BackDrop = () => {
    const dispatch = useAppDispatch();
    const myProducts = useAppSelector(state => state.magazine);
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [adress, setAdress] = useState('');
  
    const addNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const tempObj: string[] = [];
      if (name.trim().length > 0 && tel.trim().length > 0 && adress.trim().length > 0 ) {
        myProducts.names.forEach(key => {
          tempObj.push(`${key.name} : ${key.amount}`);
        })
        dispatch(addOrder(tempObj));
        dispatch(showModal());
        dispatch(resetdishes());
        setName('');
        setTel('');
        setAdress('');
      }
    }

    const showModalHandler = () => {
        dispatch(showModal());
        setName('');
        setTel('');
        setAdress('');
    }
  return (
    <div className='backdrop'>
      <form onSubmit={e => addNewProduct(e)} className={'createOrdersForm'}>
          <h2 className='formTitle'>Checkout</h2>
          <div className='inputBox'>
              <input type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name} 
                placeholder={'Enter your name'}
              />
              <input type="text"
                onChange={(e) => setTel(e.target.value)}
                value={tel} 
                placeholder={'Enter phone number'}
                />
              <input type="text" 
                onChange={(e) => setAdress(e.target.value)}
                value={adress} 
                placeholder={'Enter your address'}
               />
              <button type="submit" className={'orderBtn'}>Send</button>
              <button type="reset" onClick={showModalHandler} className={'orderBtn'}>Cancel</button>
          </div>
      </form>
    </div>
  )
}

export default BackDrop;
