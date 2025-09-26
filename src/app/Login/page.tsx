import React from "react";

const LoginPage = () => {
  return (
    <main className="grid grid-cols-12 min-h-screen bg-amber-200">
      <div className="col-span-9 col-start-1 flex items-center justify-center p-4">
        <h1 className="text-4xl">BoxChat</h1>
      </div>
      <div className="col-span-3 col-start-10 flex flex-col justify-center p-4 bg-white">
        <div className="flex items-center justify-center flex-col mb-4">
          <p>Welcome to BoxChat!</p>
        </div>
        <div className="flex items-center justify-center flex-col mb-4">
          <input className="border-1 ps-1 rounded mb-2" type="text" placeholder="Username"/>
          <input className="border-1 ps-1 rounded mb-2" type="text" placeholder="Password"/>
          <button className="bg-slate-400 w-[50%] rounded">Submit</button>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3>No Account?</h3>
          <button className="text-blue-500"><u>Create an Account</u></button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
