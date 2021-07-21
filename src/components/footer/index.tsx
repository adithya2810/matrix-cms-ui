
import React from "react";
import FooterMenu from "./footerMenu";
import Button from "@components/button/PrimaryButtonIconRight";
import { PRIVACY_POLICY } from "../../../constants"

export const Footer: React.FC = () => {
  return (

    <div className="FooterOuter-Warpper text-secondary">
      <div className="bg-accent-dark footer-section-col01-outer">
        <div className="page-center">
          <div className="footer-section-col01-inner" style={{ width: 'unset', padding: '0 30px' }}>
            <div className="footer-col01-left-section">
              <h6 className="-mt-10 laptop:w-48 font-normal leading-9 text-4xl tracking-wider p-0.5" style={{ fontSize: 32, lineHeight: '36px' }}> Let's stay engaged</h6>
              <span className="p-1 ml-4">
                <h6 className="sub-h2 font-medium text-lg leading-6" style={{ lineHeight: '24px' }}>Sign up for the Matrix Moments series</h6>
                <input className="mt-2 text-secondary bg-accent p-2 pl-3 w-full" style={{ color: "#FBF9F5" }} type="email" placeholder="Your email address goes here" />
                <Button title="Subscribe" url="/icons/arrow.svg" className={"p-1 text-cta"} onClick={() => console.log("subscribe")} style={{ fontSize: 18, lineHeight: '24px' }} />
              </span>
            </div>
            <div className="p-0.5 sm:flex sm:justify-between ">
              <div>
                <h6 className="sub-h2 font-medium text-lg"> Matrix Partner Us </h6>
                <h6 className=" sub-h2 font-medium text-lg"> Matrix Partner China</h6>
              </div>
              <div className="flex mt-2 laptop:mt-4 items-start p-0.5">
                <a className="pl-0"><img src="/icons/linkedin.svg" /></a>
                <a className="pl-9" style={{ paddingTop: '0.15rem' }}> <img src="/icons/twitter.svg" /></a>
                <a className="pl-9" style={{ paddingTop: '0.10rem' }}> <img src="/icons/instagram.svg" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-col02-outer footer-menu bg-primary">
        <div className="page-center">
          <div className="footer-section-col02-inner laptop:flex laptop:items-center" style={{ padding: '0 30px' }}>
            <FooterMenu />
            <div className="privacyMenuWrap text-secondary flex items-center sm:mt-2 sm:grid sm:grid-cols-2 sm:gap-0  laptop:ml-20 ">
              <span className="caption p-1 w-28 text-sm sm:mt-2" >PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
