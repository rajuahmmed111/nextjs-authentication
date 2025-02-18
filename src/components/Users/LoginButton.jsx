"use client";
import React from "react";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
