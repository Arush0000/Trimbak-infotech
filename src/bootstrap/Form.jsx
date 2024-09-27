import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Button2 from "../component/btn";
import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
function Form1() {
  const form1Ref = useRef(null);
  const [formData2, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData2, [name]: value });
  };

  const submitClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_25ob6n8", "template_0m778qw", form1Ref.current, {
        publicKey: "ZbkEMfxBmK76rpK66",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again later.");
        }
      );
      setformData({
        name: '',
        email: '',
        message: ''
      });
  };
  return (
    <>
      <section id="contact">
        <h1 class="section-header">Contact</h1>

        <div class="contact-wrapper">
          {/* <!-- Left contact page -->  */}
          <div className="right4 ">
            <form
              className="form2"
              ref={form1Ref} onSubmit={submitClick} style={{
                display: "flex",
                flexDirection: "column",
                gap: "13px",
                marginTop: "1rem"
              }}
            >
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={formData2.name}
                 onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData2.email}
                id=""
                placeholder="Email"
                onChange={handleChange}
              />
              <textarea
                name="message"
                id=""
                cols="0"
                rows="5"
                placeholder="Message"
                style={{padding:"12px"}}
                value={formData2.message}
                onChange={handleChange}
              ></textarea>
              <Button2 color="white" data="Submit" type="submit"></Button2>
            </form>
          </div>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <IoLocationOutline />
                <span class="contact-text place">Platinum Tower, 503, Fifth Floor</span> <span class="contact-text place"style={{paddingLeft: "42px"}}>Gurugram Haryana - 122002</span>
              </li>

              <li class="list-item">
          
                <LuPhoneCall/>
                <span class="contact-text phone">
                  <a href="tel:1800369369" title="Give me a call">
                  1800369369
                  </a>
                </span>
              </li>

              <li class="list-item">
                <CgMail />
                <span class="contact-text gmail">
                  <a href="mailto:helpdesk@trimbakinfotech.com " title="Send me an email">
                  helpdesk@trimbakinfotech.com 
                  </a>
                </span>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <FaXTwitter />
                </a>
              </li>
            </ul>
            <hr />

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Form1;
