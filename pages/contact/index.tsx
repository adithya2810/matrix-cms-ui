import SocialMetaTags from '@components/SocialMetaTags';
import React from "react";
import Contact from "../../src/modules/contact";

function ContactPage(props) {
  const details = [{
    city: "Bangalore",
    address: ['197, 6th Main, 1st Cross,', 'HAL 2nd Stage, Indira Nagar,', 'Bengaluru 560038', '+91-80-25196000'],
    direction: "https://www.google.com/maps?q=12.974069,77.64189",
    img: "/img/image 26.png"
  }, {
    city: "Delhi",
    address: ['4th Floor, Aria Towers, ', 'JW Marriott, Asset Area 4,', 'Aerocity, New Delhi, 110037', '+91-11-49495000'],
    direction: "https://www.google.com/maps?q=28.552919,77.122233",
    img: "/img/Matrix_Contact_Delhi.png"
  }, {
    city: "Mumbai",
    address: ['601-602, Ceejay House,', 'Dr Annie Besant Road, Worli,', 'Mumbai 400018', '+91-22-67680000'],
    direction: "https://www.google.com/maps?q=18.990611,72.813306",
    img: "/img/Matrix_Mumbai_picture.jpg"
  }];

  const description = () => {
    return details.map(v => v.address.join(" ")).join(" | ");
  }

  return (<>
    <SocialMetaTags title="Contact Us" url="/contact" description={description()} image={`${process.env.NEXT_PUBLIC_APP_URL}img/Matrix_Contact_Delhi.png`} />
    <Contact {...{ ...props, details: details }} />
  </>);
}

export default ContactPage;
