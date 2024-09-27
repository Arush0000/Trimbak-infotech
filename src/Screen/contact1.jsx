import Form1 from "../bootstrap/Form";
import Navbar from "../component/navbar";
import Footer from "../component/footer"

import "../Style/contact1.scss"
function Contact1() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="contact-bg"
        style={{
          height: "auto",
          background:
            "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )",
          width: "100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <div className="main-box" style={{height: "37rem",
  width: "72rem",
 display:"flex"}}>
          <div className="left-box1">
          <p style={{letterSpacing: "3px",paddingLeft: "45px"}}>Meaningful solutions, fast</p>
          <h2>Our Contact</h2>
          <p style={{letterSpacing: "1px",wordSpacing:"2px"}}>At Trimbak Infotech, we pride ourselves on serving our clients with utmost efficiency and professionalism. With a steadfast commitment to building and maintaining long-term relationships, we have earned the trust of clients nationwide. Our dedicated team continually strives to provide innovative solutions that drive growth, ensure reliability, and guarantee satisfaction. We are always here to assist you, and we invite you to reach out to us with any inquiries or for further information about our services. Your success is our priority, and we look forward to partnering with you on your journey.</p>
          </div>
          <div className="right-box2" style={{width: "45%",
  height: "100%"}}>
            <img src="company.jpg" alt="" height={"100%"} width={"100%"} />
          </div>
        </div>
      </div>
      <div className="formdiv" style={{height:"auto",background:"black",paddingBottom:"6rem"}}>
      <Form1></Form1>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Contact1;
