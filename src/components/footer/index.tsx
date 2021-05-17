import footermenu from "constants/footerMenu";
import React from "react";
import FooterMenu from "./footerMenu";
import Button from "@components/button/PrimaryButtonIconRight";

export const Footer: React.FC = () => {
  return (
    <div className="flex footer justify-end flex-col text-secondary w-full align-bottom">
      <div className="bg-accent-dark flex-grow flex justify-between sm:flex-col sm:pl-11 sm:pt-11">
          <div className="laptop:flex laptop:mt-16 p-0.5 laptop:ml-56">
            <h6 className="laptop:w-48"> Let's stay engaged</h6>
            <span className="p-1 ml-4">
              <h6 className="sub-h2 font-medium text-lg ">Sign up for the Matric Moments series</h6>
              <input className="mt-2 bg-accent-light " type="email" placeholder="Your email address goes here"/>
              <Button title="Subscribe" url="/icons/arrow.svg" onClick={()=>console.log("subscribe")} />
            </span>
          </div>
          <div className=" laptop:mt-16 p-0.5 laptop:mr-52">
            <h6 className="sub-h2 font-medium text-lg"> Matrix Partner Us </h6>
            <h6 className=" sub-h2 font-medium text-lg"> Matrix Partner China</h6>
            <div className="flex mt-2">
              <a className="p-4 pl-0"><img src="/icons/linkedin.svg"/></a>
              <a className="p-4 "> <img src="/icons/twitter.svg"/></a>
            </div>
          </div>
      </div>
      <FooterMenu/>
    </div>
  );
};
