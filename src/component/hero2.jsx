import '../Style/hero2.scss'
import Card from './card';
function Hero2() {
  const data = [
    { img:"none",
      title: "Who We Are",
      content:
        "We started a small company on 9th Jan 2000 with a team of two members. Today after few years the company has grown up to a huge size of team with good turnover  and is known as  “Trimbak InfoTech“",
    },
    {  img:"none",
      title: "WHAT WE DO",
      content:
        "Trimbak InfoTech is the best  that helps clients from different verticals and topographies to comprehend - the vital and cost implications of Data Center (DC) choices. ",
    },
    {img:"none",
      title: "CYBER SECURITY",
      content:
        "Zero Trust is a network security strategy based on the philosophy that no person or device inside or outside of an organization's network should be granted access to connect to IT systems or workloads unless it is explicitly deemed necessary.",
    },
    {img:"none",
      title: "RESOURSES",
      content:
        "Our friction-free process offers your candidates a seamless screening experience from form submission to status tracking and process completion.",
    },
    {img:"none",
      title: "UNICORNS ",
      content:
        "From promising upstarts to growing SMEs and Enterprises - top companies rely on Trimbak InfoTech to Manage their IT Setups & Infrastructures.",
    },
    {img:"none",
      title: "NETWORK MANAGEMENT",
      content:
        "The company provides consultancy, solution designing, accomplishment and troubleshooting.",
    },
  ];
  return (
    <>
      <div className="hero2" style={{ maxHeight:"auto", background: "#262737" }}>
        < div className="box">
          <h1 style={{fontFamily:"Copperplate Gothic"}}>
            Works for you, even when you aren't working.
          </h1>
         
            <p  className="description"style={{ color: "white" ,paddingTop: "27px",fontFamily:"Comic Sans MS"}} >
              We have 140+ Professionals Certified strong and dedicated team
              members who make sure that our products meet the particular
              requirement of our clients at PAN India. Throughout the
              development and designing of our products, we consider all
              specifications and requirements prescribed by our clients and also
              implement them. To maintain flawless production, we check our
              products on varied parameters such as shapes, sizes and
              dimensional accuracy.
            </p>
            <Card data={data}></Card>
        </div>
      </div>
    </>
  );
}
export default Hero2;
