import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87cdbaef-83a9-43c6-90b3-73b36ac53b62");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };

  return (
    <div div className="contact">
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through the contact form or use the details
          below. Your questions, feedback, and suggestions are highly valued as
          we aim to deliver excellent support and guidance to our university
          community.
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" />Contact@domain.com</li>
          <li> <img src={phone_icon} alt="" />+1 123-456-789</li>
          <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge, MA 02139</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name = 'name' placeholder="enter your name" required/>
            <label > Phone Number</label>
            <input type="text" name = 'phone' placeholder="enter your mobile number" required/>
            <label>write your message here</label>
            <textarea  name ="message" rows= "6" placeholder="enter your message" required></textarea>
            <button  type='submit' className="btn dark-btn"> Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
