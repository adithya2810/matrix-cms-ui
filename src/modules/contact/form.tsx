import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="relative m-auto w-11/12	">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <h1 className="main-txt text-4xl lg:text-3xl tablet:text-2xl md:text-2xl sm:text-xl font-bold">Vist our India Advisory Team Offices</h1>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="map-info border-b-2 mr-5 pb-5">
                <a href="#" className="uppercase font-bold text-xl border-b-3 bbc">Bangalore</a>
                <p>197, 6th Main, 1st Cross <br /> HAL 2nd Stage, Indira Nagar <br /> Bengaluru 560038 <br /> <br /><a href="tel:+91-80-25196000">+91-80-25196000</a></p>
              </div>
            </div>
            <div className="col-span-4 relative">
              <img src="../../img/image 26.png" alt="" />
              <div className="bg-overlay "></div>
            </div>
          </div>
        </div>
        <div className="col-span-4 ">
          <h1 className="main-txt text-4xl lg:text-3xl tablet:text-2xl md:text-2xl sm:text-xl font-bold">Share your Business Plans</h1>
        </div>
      </div>
    </div>
  )
}
export default ContactForm;
