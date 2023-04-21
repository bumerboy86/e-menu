import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addProduct } from '../../store/products.slice';
import './CreateProducts.css';

const CreateProducts = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState('');
  const [cost, setCost] = useState('');
  const [picture, setPicture] = useState('');

  const addNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.trim().length > 0 && picture && Number(cost) > 0) {
      console.log(`${product.trim()} + ${Number(cost)}`);
      dispatch(addProduct({name: product.trim(), picture, cost: Number(cost)}));
      setProduct('');
      setCost('');
      setPicture('');
    }
  }

  return (
    <form onSubmit={e => addNewProduct(e)} className={'createProductForm'}>
      <h2 className='formTitle'>Add a new dish</h2>
      <div className='inputBox'>
        <input  type="text"
                onChange={(e) => setProduct(e.target.value)}
                placeholder={'Enter the name of the dish'}
                value={product}
                />
        <input  type="text"
                onChange={(e) => setCost(e.target.value)}
                placeholder={'Enter price'}
                value={cost}
                />
        <input  type="text" 
                onChange={(e) => setPicture(e.target.value)}
                placeholder={'Enter image url'}
                value={picture}
                />
        <button type="submit" className='orderBtn'>Add</button>
      </div>
    </form>
  )
}

export default CreateProducts;
