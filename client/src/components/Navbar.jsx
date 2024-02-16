import { Link } from 'react-router-dom';

export default function Navbar() {
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
          <li>
            <Link className="text-white" to="/sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
