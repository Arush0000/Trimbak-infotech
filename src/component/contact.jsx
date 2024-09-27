import "../Style/contact.scss";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailSharp } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="border">
          <div className="info">
            <h2 style={{fontFamily:"Copperplate Gothic"}}>  Contact Info :</h2>
            <div className="detail">
            <p><LuPhoneCall/>  +91 9810079810</p>
            <p> <IoMailSharp></IoMailSharp>  helpdesk@trimbakinfotech.com</p>
            <p><MdOutlineLocationOn></MdOutlineLocationOn>  ​Platinum Tower, 503 Fifth Floor, Gurugram, Haryana - 122002</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
