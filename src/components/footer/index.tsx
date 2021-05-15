import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="flex  items-center bg-primary-dark h-64 flex-wrap">
      <h2 className="text-secondary text-6xl ml-16" > Grow With us!</h2>
      <span className="ml-16">
        <h4 className="text-secondary text-sm">Never miss out <br/> on an update</h4>
        <input type="email" placeholder="Enter your email ... " className="mt-4" ></input>
      </span>
      <span className="ml-16">
          <div className="text-secondary text-xs ">Matrix Parter US</div>
          <div className="text-secondary text-xs">Matrix Partner China</div>
        </span>
    </div>
  );
};
