import React, { useState } from "react";
import Button from "@components/button/PrimaryButtonIconRight";
import Link from 'next/link';
import Swal from 'sweetalert2';

type propType = {
  deviceType: {
    mobile: boolean;
  }
  pageType?: string;
}

const PresskitForm: React.FC<propType> = ({ deviceType, pageType }) => {
  const [form, setForm] = useState({ firstname: "", lastname: "", email: "", message: "" });
  const submitForm = async event => {
    event.preventDefault() // don't redirect the page  //salonie@matrixpartners.in,binita@matrixpartners.in,info@matrixpartners.in,
    var mail_data = { to: 'salonie@matrixpartners.in,binita@matrixpartners.in,info@matrixpartners.in', subject: 'New Presskit Enquery', html: '' };
    var html = '';
    for (var key in form) {
      if (form.hasOwnProperty(key)) {
        if (form[key]) {
          html += `<p><b>${key}</b> : ${form[key]}</p>`;
        }
      }
    }
    mail_data.html = html;
    // console.log(mail_data);
    var fd = new FormData();
    fd.append('data', JSON.stringify(mail_data));

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-mail-attachment`, {
      method: 'POST',
      body: fd
    });
    if (res.ok) {
      var reset: any = {};
      for (var key in form) {
        reset[key] = '';
      }
      setForm(reset);
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
    <div className="relative m-auto w-11/12" style={{ marginTop: deviceType.mobile ? 85 : (pageType == 'media' ? 50 : 190), marginBottom: deviceType.mobile ? 90 : 150 }}>
      <div className="row">
        <div style={{ flex: '40%' }}>
          <div>
            <p className='presskit-header'> Press Enquires</p>
            <p className='presskit-subheader'>Contact</p>
            <div className="inline presskit-hover">
              <p className="presskit-txt" style={{ marginBottom: 0 }}>Email : <a href="mailto:press@matrixpartners.in">press@matrixpartners.in</a></p>
            </div>
            <div className="inline presskit-hover">
              <p className="presskit-txt">Phone : <a href="tel:+912267680000">+912267680000</a></p>
            </div>
          </div>
          <div style={{ marginTop: deviceType.mobile ? -50 : '50px' }}>
            <p className='presskit-header'> Press Kits</p>
            <Link href={'https://matrix-cms.s3.ap-south-1.amazonaws.com/mx_teamphotos.zip'}>
              <a className="inline presskit-hover">
                <p className='presskit-subheader'>Download</p>
                <p className="presskit-txt" style={deviceType.mobile ? { marginBottom: 10 } : {}}>Team photo and bio</p>
              </a>
            </Link>
            <Link href={'https://matrix-cms.s3.ap-south-1.amazonaws.com/logo_75be270f9e.zip'}>
              <a className="inline presskit-hover">
                <p className='presskit-subheader'>Download</p>
                <p className="presskit-txt">Matrix logo</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="sm:order-first" style={{ flex: '55%' }}>
          <h1 className="main-txt presskit-main-txt" style={deviceType.mobile ? {} : { lineHeight: '100px' }}>{deviceType.mobile ? 'Press Kits' : 'Leave us a Message'}</h1>
          {deviceType.mobile && <p className="pt-4 text-lg" style={{ color: '#ADAEB2' }}>Leave us a Message</p>}
          <form className='presskit-form' onSubmit={submitForm}>
            <div className='row namegroup sm:pt-5'>
              <div style={{ flex: '50%' }}>
                <label>First Name</label>
                <input type='text' value={form.firstname} onChange={(e) => setForm({ ...form, firstname: e.target.value })} required placeholder='Type your first name here' />
              </div>
              <div style={{ flex: '50%' }}>
                <label className='right-label'>Last Name</label>
                <input type='text' value={form.lastname} onChange={(e) => setForm({ ...form, lastname: e.target.value })} required style={{ marginLeft: deviceType.mobile ? 0 : '10%' }} placeholder='Type your last name here' />
              </div>
            </div>
            <label >Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="Type your email here" />
            <label >Message</label>

            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Type your message here"></textarea>

            <Button
              title="Submit"
              type="submit"
              url="/icons/-_.svg"
              className="text-lg leading-6"
            />
          </form>
        </div>
        <div style={{ flex: '5%' }}></div>
      </div>
    </div >
  )
}
export default PresskitForm;
