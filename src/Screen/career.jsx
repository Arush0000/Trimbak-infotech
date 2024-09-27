import Navbar from "../component/navbar";
import Button2 from "../component/btn";
import Card from "../component/card";
import Client from "../component/client";
import "../Style/carrer.scss";
import Contact from "../component/contact";
import Footer from "../component/footer";
function Career() {
  const data = [
    {  img:"https://trimbakinfotech.com/images/3098090.png",
      title: "Python",
      content:
        "Join our Python internship to master programming from home. Gain skills in web and app development.",
    },
    {
        img:"https://trimbakinfotech.com/images/4744315.png",
      title: "Cybersecurity",
      content:
        "Gain hands-on experience while ​o working on real projects and participating in live sessions Perfect for passionate cybersecurity students.",
    },
    {
        img:"https://trimbakinfotech.com/images/5278402.png",
      title: "Ai",
      content:
        "Work on cutting-edge projects. Gain hands-on experience while collaborating with experts. Perfect for students passionate about artificial intelligence.",
    },
    {
        img:"https://trimbakinfotech.com/images/5230784.png",
      title: "Data Science",
      content:
        "Gain hands-on experience with data analysis, machine learning, and statistical modeling. Perfect for students passionate about unlocking insights from data.",
    },
    {
        img:"https://trimbakinfotech.com/images/7991055.png",
      title: "Mobile Dev.",
      content:
        "Discover Android app development with Encryptix! Unlock endless mobile innovation possibilities.",
    },
    {
        img:"https://trimbakinfotech.com/images/1329016.png",
      title: "Website Dev",
      content:
        "Looking for a web dev internship? Gain real experience with our team! Start your journey to success with us.",
    },
    {
        img:"https://trimbakinfotech.com/images/1968750.png",
      title: "Digital Marketing",
      content:
        "Dive into real projects and gain hands-on experience in advertising, social media, SEO, and content creation. Ideal for students eager to enter the digital marketing arena.",
    },
    {
        img:"https://trimbakinfotech.com/images/2721249.png",
      title: "Desktop Support",
      content:
        "Get hands-on IT experience with our Desktop Support Internship. Assist our team in troubleshooting and software maintenance. Ideal for students interested in IT support careers.",
    },
    {
        img:"https://trimbakinfotech.com/images/3598209.png",
      title: "Network Administration",
      content:
        "Gain hands-on experience managing network infrastructure and troubleshooting issues. Perfect for students passionate about networking.",
    },
    {
        img:"https://trimbakinfotech.com/images/3598273.png",
      title: "Server Administrator",
      content:
        "Gain hands-on experience managing server infrastructure. Work alongside experts, troubleshoot issues, and optimize server performance. Ideal for students interested in server management careers.",
    },
    {
        img:"https://trimbakinfotech.com/images/2333134.png",
      title: "IT Forensics",
      content:
        "Assist in investigating cyber incidents, analyzing digital evidence, and implementing security measures. Ideal for students interested in cybersecurity careers.",
    },
    {
        img:"https://trimbakinfotech.com/images/2640788.png",
      title: "Human Resources",
      content:
        "Gain practical experience in human resource management. Assist with recruitment, employee relations, and HR administrative tasks. Perfect for students eager to explore careers in HR.",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="main1">
        <div className="leftSection">
          <div className="pic">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png"
              alt=""
              srcset=""
              style={{ height: "32rem", marginTop: "4rem" }}
            />
          </div>
        </div>
        <div className="rightSection">
          <div className="headingmain">
            <h2>
              Kick-Start Your Career with an Internship at Trimbak Infotech
            </h2>
          </div>
          <div className="btn">
            <Button2 data="View Internship Domain"></Button2>
            <Button2 data="Know More About-Us"></Button2>
          </div>
        </div>
      </div>
      <div className="background" style={{ background: "#262737" }}>
        <div className="main2" style={{ width: "75%", margin: "auto" }}>
          <h1
            style={{
              textAlign: "center",
              color: " #dd3aeb",
              fontSize: "3rem",
              paddingTop: "3rem",
              fontFamily:"Copperplate Gothic"

            }}
          >
            VARIETY OF INTERNSHIP PROGRAMS
          </h1>
          <Card data={data}></Card>
        </div>
        <div className="div" style={{background:"lightGray"}}>
        <div className="main2" style={{ width: "75%", margin: "auto", color:"black"}}>
      <Client></Client>
      </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </>
  );
}
export default Career;
