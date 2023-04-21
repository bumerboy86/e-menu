import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CreateOrders from './components/CreateOrders/CreateOrders';
import CreateProducts from './components/CreateProducts/CreateProducts';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/e-menu' element={<Layout/>}>
            <Route index element={<CreateOrders />}/>
            <Route path='/products' element={<CreateProducts />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='*' element={<div>404 Page Not Found</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
