import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col mb-4">
        <input
          className="border-1 ps-1 rounded mb-2"
          type="text"
          placeholder="Username"
        />
        <input
          className="border-1 ps-1 rounded mb-2"
          type="text"
          placeholder=""
        />
        <button className="bg-slate-400 w-[50%] rounded">Submit</button>
      </div>
      <div className="flex  justify-center flex-col">
        <h3>No Account?</h3>
        <button className="text-blue-500">
          <u>Create an Account</u>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
