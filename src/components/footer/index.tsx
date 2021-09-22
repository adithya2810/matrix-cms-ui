
import React, { useState } from "react";
import FooterMenu from "./footerMenu";
import Button from "@components/button/PrimaryButtonIconRight";
import { PRIVACY_POLICY } from "../../../constants"

export const Footer: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const [msg, setMsg] = useState({ status: true, message: '' });
  const [subscribe, setSubscribe] = useState('');

  const submitSubscribe = async () => {
    setMsg({ status: false, message: '' })
    if (subscribe == "") {
      setMsg({ status: false, message: 'Enter valid email address.' });
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subscribe)) {
      setMsg({ status: false, message: 'Enter valid email address.' });
      return false;
    }
    var mail_data = { to: 'info@matrixpatners.in', subject: 'Subscription mail', html: `New subscription mail: ${subscribe}` };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-mail-attachment`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mail_data)
    });
    if (res.ok) {
      setMsg({ status: true, message: 'Subscribed Successfully' })
      setSubscribe('')
      setTimeout(() => setMsg({ status: false, message: '' }), 6000);
    } else {
      setMsg({ status: false, message: 'Subscription not completed, try again' })
    }
  };

  return (

    <div className="FooterOuter-Warpper text-secondary">
      <div className="bg-accent-dark footer-section-col01-outer">
        <div className="page-center">
          <div className="footer-section-col01-inner" style={{ width: 'unset', padding: '0 30px' }}>
            <div className="footer-col01-left-section">
              <h6 className="-mt-10 sm:mt-4 laptop:w-48 font-normal leading-9 text-4xl tracking-wider p-0.5" style={mobile ? { fontSize: 20, lineHeight: '24px' } : { fontSize: 32, lineHeight: '36px' }}> Let's stay engaged</h6>
              <span className="p-1 ml-4">
                <h6 className="sub-h2 font-medium text-lg leading-6 mr-12 sm:mr-4" style={mobile ? { lineHeight: '18px' } : { lineHeight: '24px', letterSpacing: 1 }}>Sign up for the Matrix Moments series</h6>
                <input value={subscribe} onChange={(e) => setSubscribe(e.target.value)} className="mt-2 text-secondary bg-accent p-2 pl-3 w-full" style={mobile ? { color: "#FBF9F5", backgroundColor: '#fbf9f514', height: 33, fontSize: 16 } : { color: "#FBF9F5", backgroundColor: '#fbf9f514' }} type="email" placeholder="Your email address goes here" />
                <Button title="Subscribe" url="/icons/arrow.svg" className={"p-1 text-cta"} onClick={() => submitSubscribe()} style={{ fontSize: mobile ? 14 : 18, lineHeight: '24px', letterSpacing: 1 }} />
                <div className="flex py-5" style={{ color: msg.status ? 'green' : 'red' }}>{msg.message}</div>
              </span>
            </div>
            <div className="p-0.5 sm:flex sm:justify-between ">
              <div>
                <h6 className="sub-h2 font-medium text-lg" style={{ letterSpacing: 1 }}><a href="https://www.matrixpartners.com/" target="__blank">Matrix Partner US</a></h6>
                <h6 className=" sub-h2 font-medium text-lg" style={{ letterSpacing: 1 }}><a href="https://www.matrixpartners.com.cn/index.php/zh/" target="__blank">Matrix Partner China</a></h6>
              </div>
              <div className="flex mt-2 laptop:mt-4 items-start p-0.5">
                <a className="pl-0" href="https://www.linkedin.com/company/matrix-partners-india/" target="__blank"><img src="/icons/linkedin.svg" /></a>
                <a className="pl-9 sm:pl-4" href="https://twitter.com/matrixindiavc" target="__blank" style={{ paddingTop: '0.15rem' }}> <img src="/icons/twitter.svg" /></a>
                {/* <a className="pl-9 sm:pl-4" style={{ paddingTop: '0.10rem' }}> <img src="/icons/instagram.svg" /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-col02-outer footer-menu bg-primary">
        <div className="page-center">
          <div className="footer-section-col02-inner laptop:flex laptop:items-center" style={{ padding: '0 30px' }}>
            <FooterMenu mobile={mobile} />
            {/* <div className="privacyMenuWrap text-secondary flex items-center sm:mt-2 sm:grid sm:grid-cols-2 sm:gap-0  laptop:ml-20 ">
              <span className="caption p-1 w-28 text-sm sm:mt-2" style={mobile ? { fontSize: 11, fontWeight: 300 } : { letterSpacing: 1 }}>PRIVACY POLICY</span>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
};
