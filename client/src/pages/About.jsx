import React from 'react';

export default function About() {
  return (
    <div className="px-2 py-12 max-w-2xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About</h1>
        <p className="mb-4 text-gray-700 text-lg">
          I've crafted this application using the MERN stack, integrating
          MongoDB, Express, React, and Node.js to ensure a seamless and
          efficient experience for users.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          At its core, my application prioritizes user authentication, offering
          both sign-in and sign-up functionalities. Additionally, I've
          implemented profile image uploading capabilities using Firebase,
          allowing you to personalize your account with ease.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          Your privacy and control are important to me. That's why I've included
          features such as account deletion, ensuring that you have full control
          over your data and account settings. And when you're ready to step
          away, signing out is just a click away, providing peace of mind
          knowing that your session is securely closed.
        </p>
      </div>
    </div>
  );
}
