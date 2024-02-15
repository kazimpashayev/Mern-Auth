import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link className="font-bold" to="/">
          MERN Auth
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
