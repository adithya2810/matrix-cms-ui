import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="flex  sm:flex-col sm:justify-center laptop:items-center bg-primary-dark footer flex-wrap sm:pl-16 ">
      <h3 className="font-light text-secondary laptop:text-7xl-m laptop:ml-36" > Grow With us!</h3>
      <span className="laptop:ml-32 sm:mt-9 sm:ml-3">
        <h6 className="text-secondary laptop:text-4xl ">Never miss out </h6>
        <h6 className="text-secondary laptop:text-4xl " > on an update</h6>
        <input type="email" placeholder="Enter your email ... " className="mt-4" ></input>
      </span>
      <span className="laptop:ml-16 sm:mt-9 ">
        <h6 className="text-secondary laptop:text-lg ">Matrix Parter US</h6>
        <h6 className="text-secondary laptop:text-lg ">Matrix Partner China</h6>
        <div className="flex flex-row mt-6">
          <img src="/icons/facebook.svg" alt="Facebook Icon" />
          <img src="/icons/linkedin.svg" alt="LinkedIn Icon" className="ml-6" />
          <img src="/icons/twitter.svg" alt="Twitter Icon" className="ml-6" />
        </div>
      </span>
    </div>
  );
};
