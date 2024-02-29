import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../store/slices/userSlice';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await response.json();
      dispatch(signInSuccess(data));

      navigate('/');
    } catch (error) {
      console.log('Could not login with Google', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-90"
    >
      Continue with google
    </button>
  );
}
