import { useEffect } from "react";
import { useTypewriter , Cursor } from "react-simple-typewriter";
import "../Style/hero1.css";
import Button1 from "./button";
function Hero1() {
  const [text] = useTypewriter ({
    words: [
      "Cloud Solutions",
      "Cybersecurity",
      "IT Outsourcing",
      "Training Excellence",
    ],
    loop: Infinity,
    deleteSpeed:50,
    typeSpeed:180
  });

  return (
    <>
      <div className="hero1">
        <div className="left">
          <div className="contentbox">
            <h1 style={{fontFamily:"Copperplate Gothic"}}>Empowering Your Business with  <div style={{color:"#491e7d"}}>{text}<Cursor></Cursor></div></h1>
            <div className="firstline1" style={{marginBottom: "1.5rem"
}}>
            <p style={{color:"#03544f"}}className="firstline" >
              Are you fed up with everyday hardware issues and want to move to
              the cloud today?
            </p>
            <p style={{color:"#03544f"}}className="secondline">
              We have been always serving our clients in a proper and efficient
              manner. Our company has maintained a long term relationship with
              our clients across the country. Furthermore, we have made sincere
              attempts to discover a real solution for growth, reliability and
              guarantee.{" "}
            </p>
            </div>
            {/* <div id="container" style={{paddingTop:"5%"}}> */}
          <Button1 data="Learn More" ></Button1>
          {/* </div> */}
          </div>
          
          
        </div>
        <div className="right">
          <img src="person.png" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}
export default Hero1;
