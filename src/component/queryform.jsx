import { useRef, useState } from "react";
import "../Style/Query.scss";
import Button2 from "./btn";
import Button1 from "./button";
import emailjs from "@emailjs/browser";
import Footer from "./footer";
function QueryForm() {
  const refElement = useRef("");
  const refElement1 = useRef("");
  const formRef = useRef(null);
  const HandleEvent = () => {
    refElement.current.style.display = "block";
    refElement1.current.style.display = "none";
    console.log("clicked");
  };
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const submitClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_25ob6n8", "template_0m778qw", formRef.current, {
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
      <div className="Queryform">
        <div className="main">
          {/* -----left----- */}
          <div className="left" ref={refElement1}>
            <h1 className="leftHeading">Want to Raise Online ​Query?</h1>
            <p className="para" style={{ color: "black" }}>
              You can also raise problem ticket and ask for quotation.
            </p>
            <div className="con-box">
              <h3>Address</h3>
              <p className="para">
                Platinum Tower, 503, Fifth Floor, Gurugram Haryana - 122002
              </p>
            </div>
            <div className="con-box">
              <h4>Phone</h4>
              <p className="para">1800-365-365</p>
            </div>
            <div className="con-box">
              <h4>Drop your Message</h4>
              <p className="para">helpdesk@trimbakinfotech.com</p>
              <div onClick={HandleEvent} className="block">
                <Button1 color="rgb(191, 66, 225)" data="Raise Query"></Button1>
              </div>
            </div>
          </div>
          {/* -------left------ */}
          {/* ------right------ */}
          <div className="right3 " ref={refElement}>
            <form className="form1" ref={formRef} onSubmit={submitClick}>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                id=""
                placeholder="Email"
                onChange={handleChange}
              />
              <textarea
                name="message"
                id=""
                cols="0"
                rows="0"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <Button2
                color="white"
                data="Submit" type="submit"
              ></Button2>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default QueryForm;
// ------right------
/**/
// ------left-------
/*

         */
