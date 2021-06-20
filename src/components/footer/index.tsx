
import React from "react";
import FooterMenu from "./footerMenu";
import Button from "@components/button/PrimaryButtonIconRight";
import { PRIVACY_POLICY } from "../../../constants"

export const Footer: React.FC = () => {
  return (
    <div className="flex  justify-end flex-col text-secondary w-full align-bottom mt-auto">
      <div className="bg-accent-dark footer-top flex laptop:justify-between sm:flex-col sm:pl-11 sm:pr-11 sm:pt-11">
        <div className="laptop:flex laptop:mt-16 p-0.5 laptop:ml-56">
          <h6 className="laptop:w-48 font-normal leading-9 text-4xl tracking-wider p-0.5"> Let's stay engaged</h6>
          <span className="p-1 ml-4">
            <h6 className="sub-h2 font-medium text-lg leading-6">Sign up for the Matrix Moments series</h6>
            <input className="mt-2 text-secondary bg-accent p-0.5 pl-3 w-full" style={{ color: "#FBF9F5" }} type="email" placeholder="Your email address goes here" />
            <Button title="Subscribe" url="/icons/arrow.svg" className={"p-1 text-cta"} onClick={() => console.log("subscribe")} />
          </span>
        </div>
        <div className=" laptop:mt-16 p-0.5 laptop:mr-52 sm:flex sm:justify-between ">
          <div>
            <h6 className="sub-h2 font-medium text-lg"> Matrix Partner Us </h6>
            <h6 className=" sub-h2 font-medium text-lg"> Matrix Partner China</h6>
          </div>
          <div className="flex mt-2 laptop:mt-8 items-start p-0.5">
            <a className=" pl-0"><img src="/icons/linkedin.svg" /></a>
            <a className=" pl-9"> <img src="/icons/twitter.svg" /></a>
          </div>
        </div>
      </div>
      <div className=" laptop:flex justify-between footer-menu bg-primary align-middle sm:pl-11 sm:pt-6">
        <FooterMenu />
        <div className=" text-secondary flex items-center sm:mt-2 sm:grid sm:grid-cols-2 sm:gap-0">
          <span className="caption p-1 w-28 text-sm sm:mt-2" >PRIVACY POLICY</span>
          <p className="caption p-0.5 laptop:ml-20 laptop:mr-40 ">{PRIVACY_POLICY} </p>
        </div>
      </div>

    </div>
  );
};
