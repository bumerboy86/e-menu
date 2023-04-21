import Basket from '../Basket/Basket';
import Dishes from '../Dishes/Dishes';
import './CreateOrders.css';

const CreateOrders = () => {
  return (
    <div className='mag'>
        <Dishes />
        <Basket />
    </div>
  )
}

export default CreateOrders;
