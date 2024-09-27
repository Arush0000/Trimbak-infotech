import "../Style/About.scss"
import Contact from "../component/contact";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import { IoCheckmarkDone } from "react-icons/io5";

function About() {
    const colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC"];
    const services = [
      "Data Centres",
      "Cloud Virtual Machines",
      "Consultancy",
      "Fastest Hosting",
      "Servers & Storages",
      "Networking",
      "Endpoint Detection & Response",
      "Hosting & Web Design",
      "Cloud Computing & Development",
      "Data Recovery",
      "Applications Development",
      "Software Development",
      "Software Installations",
      "Hardware Maintenance",
      "FMS",
      "D. Background Verifications",
      "Printers & Scanners Support",
      "Cyber Securities",
      "Firewall Licensings / Renewals",
      "VPN Services",
      "Warranty / Non Warranty Supports",
      "Asset Management",
      "Corporate Cloud Training",
      "Engineers Outsourcing",
      "Tekla, Revit & Autodesk Support",
      "Remote Support 24X7",
      "Scanning Support",
      "Yeild Testing",
      "Networking Securities",
      "Cloud Securities",
      "Red Hat Support",
      "Linux Support",
      "Server Management",
      "Demonstrations",
      "Third Party Cross Checks",
      "Standalone traditional servers",
      "Smart Classrooms",
      "Email securities",
      "On Demand Penetration testing",
      "SLA Based Managed Services",
      "Helpdesk Support Services",
      "Technology Consulting",
      "Firewall Management",
      "Incident Response",
      "Remote Management",
      "End-User Management",
      "Cloud Operations Management",
      "Upgrade / Migration",
      "Line Printers & Barcode Printers",
      "IT Procurement"
    ];
    
    const service = services.map((service, index) => {
      return {
        service: service,
        color: colors[Math.floor(index / 4) % colors.length]
      };
    });
    
    
      
  return (
    <> 
    <Navbar></Navbar>
      <div className="About">
        <div className="About-box">
          <h1>About Trimbak Infotech </h1>
          <p >
            <i style={{color:"#201699",paddingBottom:"12px", fontSize:"1.1rem",fontWeight:"600"}}>Dear Customer,</i> <br />
            <i>Greetings from Trimbak InfoTech !</i>
            <br />
            <i>
              " Here we are offering you a service which will help you to find
              better IT AMC Solutions at one roof for your day to day smooth
              operations and avoid delays due to communicate with multiple
              vendors  , we are requesting you please spend few minutes to
              understand Trimbak InfoTech and our capabilities ".
            </i>
          </p>
          <p >
            Trimbak InfoTech Established in Jan 2003 as a Name of S.S
            Technologies is leading multiple brands in imaging products and long
            life duty spares for all types of Multifunction Printers and Heavy
            Duty Scanners. The company has two offices in Delhi / NCR and direct
            distribution in over 35 cities in India. The company is committed to
            provide compelling and innovative services and has recently invested
            in Cloud Storages & Data Centres .{" "}
          </p>
          <p >
            Over 23 years of focusing on "the customer" face to face, and
            providing solutions that result in customer satisfaction. Being one
            of the reliable market leaders, we have made high reputation in
            market in terms of high quality, client satisfaction and timely
            delivery. Our company is a blend of having a capability to make
            modifications in designs and specifications and of being flexible.
            From our establishment, our company has always laid a strong
            foundation of flexibility and knowledge.
          </p>
          <p >
            We have strong and dedicated team members who make sure that our
            products meet the particular requirementof our clients. Throughout
            the development and designing of our products, we consider all
            specifications and requirements prescribed by our clients and also
            implement them. To maintain flawless production, we check our
            products on varied parameters such as shapes, sizes and dimensional
            accuracy.{" "}
          </p>
          <p >
            We have been always serving our clients in a proper and efficient
            manner. Our company has maintained a long term relationship with our
            clients across the globe. Furthermore, we have made sincere attempts
            to discover a real solution for growth, reliability and guarantee.
          </p>
          <h1 style={{padding:"2rem 0rem"}}>Provided Services</h1>
          <div className="btn-main" style={{display:"flex",flexWrap:"wrap",gap:"1rem"}}>
          {
            service.map((items)=>{
                return<>
                 <div className="btn-box">
            <div className="color" style={{background:items.color}}><IoCheckmarkDone></IoCheckmarkDone></div>
            <div className="content"> {items.service}</div>
        </div>
                
                </>
            })
          }
         </div>
        </div>
       
      </div>
     <Contact></Contact>
     <Footer></Footer>
    </>
  );
}
export default About;
