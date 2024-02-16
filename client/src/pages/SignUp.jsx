import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          className="bg-gray-200 p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="bg-gray-200 p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="bg-gray-200 p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80"
        >
          Sign Up
        </button>
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
