import React from "react";
import Button from "@components/button/PrimaryButtonIconRight";

const ContactForm: React.FC = () => {
  return (
    <div className="relative m-auto w-11/12	">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <h1 className="main-txt text-4xl lg:text-3xl tablet:text-2xl md:text-2xl sm:text-xl font-bold">Vist our India Advisory Team Offices</h1>
          <div className="grid grid-cols-12 ">
            <div className="col-span-8">
              <div className="map-info border-b-2 mr-5 pb-5">
                <a href="#" className="uppercase font-bold text-xl border-b-3 bbc">Bangalore</a>
                <hr className="under-line" />
                <p>197, 6th Main, 1st Cross <br /> HAL 2nd Stage, Indira Nagar <br /> Bengaluru 560038 <br /> <br /><a href="tel:+91-80-25196000">+91-80-25196000</a></p>
              </div>
              <div className="direction-link" >GET DIRECTION</div>
            </div>
            <div className="col-span-4 relative">
              <img src="../../img/image 26.png" alt="" />
              <div className="bg-overlay "></div>
            </div>
          </div>
          <hr className="line" />
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="map-info border-b-2 mr-5 pb-5">
                <a href="#" className="uppercase font-bold text-xl border-b-3 bbc">DELHI</a>
                <hr className="under-line" />
                <p>4th Floor, Aria Towers, <br /> JW Marriott, Asset Area 4, <br /> Aerocity, New Delhi, 110037 <br /> <br /><a href="tel:+91-11-49495000">+91-11-49495000</a></p>
              </div>
              <div className="direction-link" >GET DIRECTION</div>
            </div>
            <div className="col-span-4 relative">
              <img src="../../img/image 26.png" alt="" />
              <div className="bg-overlay "></div>
            </div>
          </div>
          <hr className="line" />
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="map-info border-b-2 mr-5 pb-5">
                <a href="#" className="uppercase font-bold text-xl border-b-3 bbc">MUMBAI</a>
                <hr className="under-line" />
                <p>601-602, Ceejay House, <br /> Dr Annie Besant Road, Worli,  <br /> Mumbai 400018 <br /> <br /><a href="tel:+91-22-67680000">+91-22-67680000</a></p>
              </div>
              <div className="direction-link" >GET DIRECTION</div>
            </div>
            <div className="col-span-4 relative">
              <img src="../../img/image 26.png" alt="" />
              <div className="bg-overlay "></div>
            </div>
          </div>
        </div>
        <div className="col-span-4 ">
          <h1 className="main-txt text-4xl lg:text-3xl tablet:text-2xl md:text-2xl sm:text-xl font-bold">Share your Business Plans</h1>
          <form className='contact-form'>
            <label >Name</label>
            <input type="text" placeholder="Name" />
            <label >Company Name</label>
            <input type="text" placeholder="Company Name" />
            <label >What are you building?</label>
            <textarea placeholder="Company Brief" />
            <label >File Attachment</label>
            <input type="file" />
            <label >Email Id</label>
            <input type="email" placeholder="Contact Email" />
            <label >Mobile Number</label>
            <input type="text" placeholder="Contact Number" />
            <Button
              title="Apply"
              url="/icons/rightArrow.svg"
              onClick={() => console.log("subscribe")}
              className="text-lg leading-6"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactForm;
