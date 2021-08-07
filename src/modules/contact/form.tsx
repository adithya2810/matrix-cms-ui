import React, { useState } from "react";
import Button from "@components/button/PrimaryButtonIconRight";


const ContactForm: React.FC = () => {
  const [contact, setContact] = useState({ name: '', company_name: '', company_brief: '', email: '', mobile: '' });
  const [attachment, setAttachment] = useState(null);
  const [msg, setMsg] = useState({ status: true, message: '' });

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

  const onFileChange = event => {
    setAttachment(event.target.files[0]);
  };

  const handleChange = (event: any, key: string) => {
    setContact({ ...contact, [key]: event.target.value });
  }

  const submitContact = async event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    var mail_data = { to: 'komalsaini2010@gmail.com', subject: 'New Contact Us Enquery', html: '' };

    var html = '';
    for (var key in contact) {
      if (contact.hasOwnProperty(key)) {
        if (contact[key]) {
          html += `<p><b>${key}</b> : ${contact[key]}</p>`;
        }
      }
    }
    mail_data.html = html;
    var fd = new FormData();
    fd.append("files.file", attachment, attachment.name);
    fd.append('data', JSON.stringify(mail_data));

    const res = await fetch('http://192.168.0.30:1337/send-mail-attachment', {
      method: 'POST',
      body: fd
    })

    if (res.ok) {
      setMsg({ status: true, message: 'Mail send successfully' })
      var reset: any = {};
      for (var key in contact) {
        reset[key] = '';
      }
      setContact(reset);
      setTimeout(() => setMsg({ status: false, message: '' }), 6000);
    } else {
      setMsg({ status: false, message: 'Mail not sended!' })
    }
  }

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
          <form className='contact-form' onSubmit={submitContact}>
            <label >Name</label>
            <input type="text" name="name" required value={contact.name} onChange={(e) => handleChange(e, 'name')} placeholder="Name" />
            <label >Company Name</label>
            <input type="text" value={contact.company_name} placeholder="Company Name" onChange={(e) => handleChange(e, 'company_name')} />
            <label >What are you building?</label>
            <textarea value={contact.company_brief} placeholder="Company Brief" onChange={(e) => handleChange(e, 'company_brief')} />
            <label >File Attachment</label>
            <input type="file" onChange={onFileChange} />
            <label >Email Id</label>
            <input type="email" name="email" required value={contact.email} placeholder="Contact Email" onChange={(e) => handleChange(e, 'email')} />
            <label >Mobile Number</label>
            <input type="text" name="mobile" value={contact.mobile} placeholder="Contact Number" onChange={(e) => handleChange(e, 'mobile')} />
            <Button
              type='submit'
              title="Apply"
              url="/icons/rightArrow.svg"
              className="text-lg leading-6"
            />
          </form>
          <div className="flex py-5" style={{ color: msg.status ? 'green' : 'red' }}>{msg.message}</div>
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
          <p className='main-txt text-3xl contact-subHeading font-bold'>CHINA</p>
          <hr className="under-line" style={{ width: '80%', margin: '15px 0 32px 0' }} />
          <p>BEIJING</p><br />
          <p>SHANGHAI</p><br />
          <div className='website-link' style={{ display: 'flex' }}><a>Visit China Website</a><img style={{ marginLeft: '15px' }} src='/icons/-_.svg' /></div>

          <p className='main-txt text-3xl contact-subHeading font-bold' style={{ marginTop: 60 }}>MAURITIUS</p>
          <hr className="under-line" style={{ width: '80%', margin: '15px 0 32px 0' }} />
          <p>PORT LOUIS</p><br />

        </div>
      </div>


    </div>
  )
}
export default ContactForm;

