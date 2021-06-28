import React from "react";
import Button from "@components/button/PrimaryButtonIconRight";

const ContactForm: React.FC = () => {
  const details = [{
    city: "Bangalore",
    address: ['197, 6th Main, 1st Cross,', 'HAL 2nd Stage, Indira Nagar,', 'Bengaluru 560038', '+91-80-25196000']
  }, {
    city: "DELHI",
    address: ['4th Floor, Aria Towers, ', 'JW Marriott, Asset Area 4,', 'Aerocity, New Delhi, 110037', '+91-11-49495000']
  }, {
    city: "MUMBAI",
    address: ['601-602, Ceejay House,', 'Dr Annie Besant Road, Worli,', 'Mumbai 400018', '+91-22-67680000']
  }]
  return (
    <div className="relative m-auto w-11/12	" style={{ marginTop: 100, marginBottom: 150 }}>
      <div className="row">
        <div style={{ flex: '60%' }}>
          <h1 className="main-txt text-4xl first-head contact-heading font-bold">Vist our India Advisory Team Offices</h1>
          {details.map((data) => (
            <div className="row " style={{ marginTop: '50px' }}>
              <div style={{ flex: '66%' }} className="col-span-8 contact-address">
                <div className="map-info border-b-2 mr-5 pb-5">
                  <a href="#" className="uppercase font-bold text-xl border-b-3 bbc">{data.city}</a>
                  <hr className="under-line" />
                  <p>{data.address[0]} <br />{data.address[1]} <br /> data.address[2] <br /> <br /><a href={data.address[3]}>{data.address[3]}</a></p>
                </div>
                <div className="direction-link" >GET DIRECTION <span><img src='/icons/blackArrow.svg' /></span></div>
              </div>
              <div style={{ flex: '44%' }} className="col-span-4 relative">
                <div className='city-overlay'>{data.city}</div>
                <img className='contact-img' src="../../img/image 26.png" alt="" />
                <div className="contact-bg-overlay "></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: '40%' }}>
          <h1 className="main-txt text-4xl lg:text-3xl contact-heading font-bold form-heading">Share your Business Plans</h1>
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

      <h1 className="main-txt text-4xl contact-heading  font-bold" style={{ marginTop: '50px' }}>Matrix Partners Global</h1>
      <div className='row'>
        <div style={{ flex: '25%' }}>
          <p className='main-txt text-3xl contact-subHeading font-bold'>USA</p>
          <hr className="under-line" style={{ width: '80%', margin: '15px 0 32px 0' }} />
          <p>BOSTON</p><br />
          <p>PALO ALTO</p><br />
          <p>SAN FRANCISCO</p><br />
          <div className='website-link' style={{ display: 'flex' }}><a>Visit USA Website</a><img style={{ marginLeft: '15px' }} src='/icons/-_.svg' /></div>
        </div>
        <div style={{ flex: '50%' }}>
          <img className='map' src='/icons/image27.svg' />
        </div>
        <div style={{ flex: '25%' }}>
          <p className='main-txt text-3xl contact-subHeading font-bold'>USA</p>
          <hr className="under-line" style={{ width: '80%', margin: '15px 0 32px 0' }} />
          <p>BEIJING</p><br />
          <p>SHANGHAI</p><br />
          <div className='website-link' style={{ display: 'flex' }}><a>Visit USA Website</a><img style={{ marginLeft: '15px' }} src='/icons/-_.svg' /></div>

          <p className='main-txt text-3xl contact-subHeading font-bold' style={{ marginTop: 60 }}>MAURITIUS</p>
          <hr className="under-line" style={{ width: '80%', margin: '15px 0 32px 0' }} />
          <p>PORT LOUIS</p><br />

        </div>
      </div>


    </div>
  )
}
export default ContactForm;
