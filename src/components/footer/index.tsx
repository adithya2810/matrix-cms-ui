
import React from "react";
import FooterMenu from "./footerMenu";
import Button from "@components/button/PrimaryButtonIconRight";
import { PRIVACY_POLICY } from "../../../constants"

export const Footer: React.FC = () => {
  return (

    <div className="FooterOuter-Warpper text-secondary">
      <div className="bg-accent-dark footer-section-col01-outer">
        <div className="page-center">
          <div className="footer-section-col01-inner">
            <div className="footer-col01-left-section">
              <h6 className="laptop:w-48 font-normal leading-9 text-4xl tracking-wider p-0.5"> Let's stay engaged</h6>
              <span className="p-1 ml-4">
                <h6 className="sub-h2 font-medium text-lg leading-6">Sign up for the Matrix Moments series</h6>
                <input className="mt-2 text-secondary bg-accent p-0.5 pl-3 w-full" style={{ color: "#FBF9F5" }} type="email" placeholder="Your email address goes here" />
                <Button title="Subscribe" url="/icons/arrow.svg" className={"p-1 text-cta"} onClick={() => console.log("subscribe")} />
              </span>
            </div>
            <div className="p-0.5 sm:flex sm:justify-between ">
              <div>
                <h6 className="sub-h2 font-medium text-lg"> Matrix Partner Us </h6>
                <h6 className=" sub-h2 font-medium text-lg"> Matrix Partner China</h6>
              </div>
              <div className="flex mt-2 laptop:mt-4 items-start p-0.5">
                <a className=" pl-0"><img src="/icons/linkedin.svg" /></a>
                <a className=" pl-9"> <img src="/icons/twitter.svg" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-col02-outer footer-menu bg-primary">
        <div className="page-center">
          <div className="footer-section-col02-inner laptop:flex laptop:items-center ">
            <FooterMenu />
            <div className="text-secondary flex items-center sm:mt-2 sm:grid sm:grid-cols-2 sm:gap-0  laptop:ml-20 ">
              <span className="caption p-1 w-28 text-sm sm:mt-2" >PRIVACY POLICY</span>
              <p className="caption p-0.5">{PRIVACY_POLICY} </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
