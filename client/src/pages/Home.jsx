import React from 'react';

export default function Home() {
  return (
    <div className="px-2 py-12 max-w-2xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to my Auth App!
        </h1>
        <p className="mb-4 text-gray-700 text-lg">
          I've developed a comprehensive full-stack web application using the
          MERN (MongoDB, Express, React, Node.js) stack. This application has
          strong authentication features that allow users to easily sign up,
          sign in and sign out. Additionally, it allows users to add a profile
          photo and delete their account. It also provides access to protected
          routes for authenticated users only.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          As a developer, I've constructed the frontend of the application using
          React, with client-side routing simplified by React-Router-Dom. On the
          backend, I've used Node.js and Express, with MongoDB serving as the
          database solution. For authentication, I've implemented JSON Web
          Tokens (JWT) to ensure secure user access.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          This application is designed to serve as a foundation for developing
          full-stack web applications with authentication using the MERN stack.
          You're welcome to use it as a template for your own projects and
          customize it according to your requirements!
        </p>
      </div>
    </div>
  );
}
