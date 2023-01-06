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
          ? <Spinner />
          : <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                placeholder='Enter your email'
                onChange={event => setFormData({ ...formData, email: event.target.value })}
              />
            </label>

            <br />

            <label>
              Password:
              <input
                type="password"
                value={password}
                placeholder='Enter your password'
                onChange={event => setFormData({ ...formData, password: event.target.value })}
              />
            </label>

            <br />

            <button type="submit">Log in</button>
          </form>
      }
    </>

  );
}

