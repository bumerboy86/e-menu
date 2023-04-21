import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import BackDrop from '../UI/BackDrop/BackDrop';
import './Layout.css';

const Layout = () => {
    const state = useAppSelector(state => state.magazine);
    
    return (
    <div className='App'>
        {state.modal && <BackDrop />}
        <ul>
            <li className='circle' style={{background: state.status}}></li>
            <li className='navLi'>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className='navLi'>
                <NavLink to={'/products'}>Products</NavLink>
            </li>
            <li className='navLi'>
                <NavLink to={'/orders'}>Orders</NavLink>
            </li>
        </ul>
        <Outlet />
    </div>
    )
}

export default Layout;
