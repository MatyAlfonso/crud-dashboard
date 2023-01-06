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
        <button
            onClick={handleClick}
            className='bg-red-600 text-white p-3 m-2'
        >
            Logout
        </button>
    )
}
