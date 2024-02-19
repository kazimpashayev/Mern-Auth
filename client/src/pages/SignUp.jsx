import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../store/slices/userSlice';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      dispatch(signInSuccess(data));

      if (data.statusCode === 400) {
        dispatch(signInFailure(data.message));
        return;
      }

      navigate('/sign-in');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    });
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-gray-200 p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-gray-800 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80"
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <span className="text-blue-500">
          <Link to="/sign-in">Sign in</Link>
        </span>
      </div>
    </div>
  );
}
