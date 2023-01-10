import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/login');
    }

    return (
        <nav className='bg-black flex justify-between items-center'>
            <h1 className='text-white text-6xl font-bold text-center p-6'>My Dashboard</h1>
            <button
                onClick={handleClick}
                className='bg-blue text-white text-xl py-2 px-4 m-4 rounded-2xl font-bold'
            >
                Logout
            </button>
        </nav>
    )
}
