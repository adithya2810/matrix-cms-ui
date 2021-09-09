import React from "react";
import Button from "@components/button/PrimaryButtonIconRight";
import Link from 'next/link';

type propType = {
  deviceType: {
    mobile: boolean;
  }
  pageType?: string;
}

const PresskitForm: React.FC<propType> = ({ deviceType, pageType }) => {
  return (
    <div className="relative m-auto w-11/12" style={{ marginTop: deviceType.mobile ? 85 : (pageType == 'media' ? 50 : 190), marginBottom: deviceType.mobile ? 90 : 150 }}>
      <div className="row">
        <div style={{ flex: '40%' }}>
          <div>
            <p className='presskit-header'> Press Enquires</p>
            <p className='presskit-subheader'>Contact</p>
            <a className="inline presskit-hover">
              <p className="presskit-txt" style={{ marginBottom: 0 }}>Email : <a href="mailto:press@matrixpartners.in">press@matrixpartners.in</a></p>
            </a>
            <a className="inline presskit-hover">
              <p className="presskit-txt">Phone : <a href="tel:+912267680000">+912267680000</a></p>
            </a>
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
          <form className='presskit-form'>
            <div className='row namegroup sm:pt-5'>
              <div style={{ flex: '50%' }}>
                <label>First Name</label>
                <input type='text' placeholder='Type your first name here' />
              </div>
              <div style={{ flex: '50%' }}>
                <label className='right-label'>Last Name</label>
                <input type='text' style={{ marginLeft: deviceType.mobile ? 0 : '10%' }} placeholder='Type your last name here' />
              </div>
            </div>
            <label >Email</label>
            <input type="email" placeholder="Type your email here" />
            <label >Message</label>

            <textarea placeholder="Type your message here" />

            <Button
              title="Submit"
              url="/icons/-_.svg"
              onClick={() => console.log("subscribe")}
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
