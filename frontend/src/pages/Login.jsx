import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';

export const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());

  }, [user, isError, isSuccess, message, navigate, dispatch]);


  const handleSubmit = async (event) => {

    event.preventDefault();

    const userData = {
      email,
      password,
    }

    dispatch(login(userData));
  };

  return (
    <>
      {
        isLoading
          ?
          <div className='flex items-center justify-center h-screen'>
            <Spinner />
          </div>
          :
          <form className='flex flex-col items-center justify-center h-[80vh]' onSubmit={handleSubmit}>
            <label className='text-white text-2xl m-2'>
              Email:
              <br />
              <input
                className='rounded-2xl p-2 text-black focus:ring focus:ring-teal'
                type="email"
                value={email}
                placeholder='Try admin@admin.com'
                onChange={event => setFormData({ ...formData, email: event.target.value })}
              />
            </label>

            <br />

            <label className='text-white text-2xl m-2'>
              Password:
              <br />
              <input
                className='rounded-2xl p-2 text-black focus:ring focus:ring-teal'
                type="password"
                value={password}
                placeholder='Try admin'
                onChange={event => setFormData({ ...formData, password: event.target.value })}
              />
            </label>

            <br />

            <button className='bg-teal p-6 text-2xl rounded-2xl font-bold hover:bg-dark-teal hover:text-white' type="submit">Log in</button>
          </form>
      }
    </>

  );
}

