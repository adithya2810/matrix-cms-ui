import React from "react";
import Button from "@components/button/PrimaryButtonIconRight";

const PresskitForm: React.FC = () => {
  return (
    <div className="relative m-auto w-11/12	" style={{ marginTop: 200, marginBottom: 150 }}>
      <div className="row">
        <div style={{ flex: '40%' }}>
          <div>
            <p className='presskit-header'> Press Enquires</p>
            <p className='presskit-subheader'>Contact</p>
            <p className="presskit-txt">Email : press@matrixpartners.in</p>
          </div>
          <div style={{ marginTop: '50px' }}>
            <p className='presskit-header'> Press Kits</p>
            <p className='presskit-subheader'>Download</p>
            <p className="presskit-txt">Team photo and bio</p>
            <p className='presskit-subheader'>Download</p>
            <p className="presskit-txt">Matrix logo</p>
          </div>

        </div>
        <div style={{ flex: '60%' }}>
          <h1 className="main-txt presskit-main-txt ">Leave us a Message</h1>
          <form className='presskit-form'>
            <div className='row namegroup'>
              <div style={{ flex: '50%' }}>
                <label>First Name</label>
                <input type='text' placeholder='Type your first name here' />
              </div>
              <div style={{ flex: '50%' }}>
                <label className='right-label'>Last Name</label>
                <input type='text' placeholder='Type your last name here' />
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
      </div>
    </div>
  )
}
export default PresskitForm;
