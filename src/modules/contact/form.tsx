import React, { useState } from "react";
import Button from "@components/button/PrimaryButtonIconRight";
import Link from 'next/link';
import Swal from 'sweetalert2';

type propType = {
  deviceType: {
    mobile: boolean;
  };
  details: any[];
}

const ContactForm: React.FC<propType> = ({ deviceType, details }) => {
  const [contact, setContact] = useState({ name: '', company_name: '', company_brief: '', email: '', mobile: '' });
  const [attachment, setAttachment] = useState(null);

  const onFileChange = event => {
    setAttachment(event.target.files[0]);
  };

  const handleChange = (event: any, key: string) => {
    setContact({ ...contact, [key]: event.target.value });
  }

  const submitContact = async event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    var mail_data = { to: 'salonie@matrixpartners.in,info@matrixpartners.in', subject: 'New Contact Us Enquery', html: '' };

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
    if (attachment) {
      fd.append("files.file", attachment, attachment.name);
    }
    fd.append('data', JSON.stringify(mail_data));

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-mail-attachment`, {
      method: 'POST',
      body: fd
    })

    if (res.ok) {
      var reset: any = {};
      for (var key in contact) {
        reset[key] = '';
      }
      setContact(reset);
      Swal.fire({
        title: 'Success!',
        text: 'Thanks for your submission, we will be in touch with you shortly.',
        icon: 'success',
        confirmButtonText: 'Ok',
        timer: 6000
      })
    } else {
      Swal.fire({
        title: 'Failed!',
        text: 'Mail not sended!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <div className="relative m-auto w-11/12	" style={deviceType.mobile ? {} : { marginTop: 100, marginBottom: 150 }}>
      <div className="row">
        <div className="pr-24 sm:pr-0 sm:pt-10" style={deviceType.mobile ? {} : { flex: '65%' }}>
          <h1 className="main-txt text-4xl first-head font-bold" style={deviceType.mobile ? { fontSize: 47, lineHeight: '60px', letterSpacing: -0.1, fontWeight: 400 } : { lineHeight: '80px' }}>Vist our India Advisory Team Offices</h1>
          {details.map((data, i) => (
            <div key={i} className="row pb-7 pr-2 sm:pb-0 sm:pr-4" style={deviceType.mobile ? {} : { marginTop: '50px', borderBottom: (details.length - 1) != i ? '1px solid rgba(1, 87, 110, 1)' : 'unset' }}>
              <div style={deviceType.mobile ? { top: 280 } : { flex: '75%', marginRight: 6 }} className="col-span-8 contact-address">
                <div className="map-info border-b-2 mr-8 pb-5 sm:mr-0" style={deviceType.mobile ? {} : { borderColor: 'rgba(1, 87, 110, 1)' }}>
                  <a href="#" className="uppercase font-bold text-lg border-b-3 bbc"><u>{data.city}</u></a>
                  {/* <hr className="under-line" /> */}
                  <p className="text-sm pt-2">{data.address[0]} <br />{data.address[1]} <br /> {data.address[2]} <br /> <br /><a href={data.address[3]}>{data.address[3]}</a></p>
                </div>
                <div className="direction-link mr-5 sm:pt-1">
                  <Link href={data.direction}>
                    <a className="flex" style={{ display: 'flex' }}>GET DIRECTION <span className="pt-1 sm:pl-2"><img src='/icons/blackArrow.svg' /></span></a>
                  </Link>
                </div>
              </div>
              <div style={deviceType.mobile ? { width: 'calc(100% - 40px)', height: '28vh', alignSelf: 'flex-end' } : { flex: '25%' }} className="col-span-4 relative">
                <div className='city-overlay'>{data.city}</div>
                <img className='contact-img' src={data.img} alt="" style={{ width: '100%', height: '100%' }} />
                <div className="contact-bg-overlay "></div>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:order-first" style={{ flex: '35%' }}>
          <h1 className="main-txt text-4xl lg:text-3xl font-bold form-heading sm:font-normal" style={deviceType.mobile ? { fontSize: 48, lineHeight: '60px', letterSpacing: -2 } : { lineHeight: '80px' }}>Share your Business Plan</h1>
          <form className='contact-form pt-10 sm:pt-5' onSubmit={submitContact}>
            <label className="sm:font-extrabold" style={deviceType.mobile ? { fontSize: 19 } : {}}>Name</label>
            <input type="text" name="name" required value={contact.name} onChange={(e) => handleChange(e, 'name')} placeholder="Name" />
            <label className="sm:font-extrabold" style={deviceType.mobile ? { fontSize: 19 } : {}}>Company Name</label>
            <input type="text" value={contact.company_name} placeholder="Company Name" onChange={(e) => handleChange(e, 'company_name')} />
            <label className="sm:font-extrabold" style={deviceType.mobile ? { fontSize: 19 } : {}}>What are you building?</label>
            <textarea value={contact.company_brief} placeholder="Company Brief" onChange={(e) => handleChange(e, 'company_brief')} />
            <label className="sm:font-extrabold" style={deviceType.mobile ? { fontSize: 19 } : {}}>File Attachment</label>
            <input id="file983247" type="file" style={deviceType.mobile ? { padding: '4px 5px' } : {}} onChange={onFileChange} />
            <label className="sm:font-extrabold" style={deviceType.mobile ? { fontSize: 19 } : {}}>Email Id</label>
            <input type="email" name="email" required value={contact.email} placeholder="Contact Email" onChange={(e) => handleChange(e, 'email')} />
            <label className="sm:font-extrabold" style={deviceType.mobile ? { fontSize: 19 } : {}}>Mobile Number</label>
            <input type="text" name="mobile" value={contact.mobile} placeholder="Contact Number" onChange={(e) => handleChange(e, 'mobile')} />
            <Button
              type='submit'
              title="Apply"
              url="/icons/rightArrow.svg"
              className="text-lg leading-6"
              arrowClass="sm:w-5 sm:pt-1"
              style={deviceType.mobile ? { fontSize: 14, marginTop: 0, letterSpacing: 0, fontWeight: 500 } : {}}
            />
          </form>
        </div>
      </div>

      <h1 className="main-txt text-5xl font-bold sm:pt-44 sm:font-normal" style={deviceType.mobile ? { letterSpacing: -0.1 } : { marginTop: '50px' }}>Matrix Partners Global</h1>
      <div className='row contact-addresses'>
        <div style={{ flex: '25%' }}>
          <p className='main-txt text-3xl contact-subHeading font-bold'>USA</p>
          <hr className="under-line" style={deviceType.mobile ? {} : { width: '80%', margin: '15px 0 32px 0' }} />
          <p className="pb-5 sm:pb-3">BOSTON</p>
          <p className="pb-5 sm:pb-3">PALO ALTO</p>
          <p className="pb-5 sm:pb-3">SAN FRANCISCO</p>
          <div className='website-link' style={{ display: 'flex' }}>
            <a href="https://www.matrixpartners.com/" target="__blank">Visit USA Website</a>
            <img style={{ marginLeft: '15px' }} src='/icons/-_.svg' /></div>
        </div>
        <div className="pt-5" style={{ flex: '50%' }}>
          <img className='map' src='/icons/image27.svg' />
        </div>
        <div style={{ flex: '25%' }}>
          <p className='main-txt text-3xl contact-subHeading font-bold'>CHINA</p>
          <hr className="under-line" style={deviceType.mobile ? {} : { width: '80%', margin: '15px 0 32px 0' }} />
          <p className="pb-5 sm:pb-3">BEIJING</p>
          <p className="pb-5 sm:pb-3">SHANGHAI</p>
          <div className='website-link' style={{ display: 'flex' }}><a href="https://www.matrixpartners.com.cn/index.php/zh/" target="__blank">Visit China Website</a><img style={{ marginLeft: '15px' }} src='/icons/-_.svg' /></div>

          <p className='main-txt text-3xl contact-subHeading font-bold' style={{ marginTop: 60 }}>MAURITIUS</p>
          <hr className="under-line" style={deviceType.mobile ? {} : { width: '80%', margin: '15px 0 32px 0' }} />
          <p className="pb-5 sm:pb-3">PORT LOUIS</p>
        </div>
      </div>
    </div>
  )
}
export default ContactForm;

