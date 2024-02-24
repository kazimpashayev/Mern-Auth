import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link className="font-bold text-white" to="/">
          MERN Auth
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/about">
              About
            </Link>
          </li>
          {currentUser ? (
            <Link to="/profile">
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={currentUser.profilePhoto}
                alt="The Profile Photo"
              />
            </Link>
          ) : (
            <li>
              <Link className="text-white" to="/sign-in">
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
