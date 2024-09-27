import "../Style/testimonal.scss";
function Testimonal() {
  const Data2 = [
    {
      img: "https://trimbakinfotech.com/images/1630841939038.jpg",
      name: "Raj Kumar",
      postion: "CFO - Amul India",
      description:
        "They are just genious, know very well how to reduce the cost of operation highly recommend team Trimbak for every Corporate ",
    },
    {
      img: "https://trimbakinfotech.com/images/GaneshNatarajan.jpg",
      name: "Ganesh Sahoo",
      postion: "Financial Director - Head & Strong",
      description:
        "When we met for the first time, it was known that this is going to last for a long time, today when 12 years have passed, I did not know, Sachin, keep working like this and keep moving forward, best wishes from the heart ",
    },
    {
      img: "https://trimbakinfotech.com/images/1517686817741.jpg",
      name: "Pradeep Minocha",
      postion: "Vice President - Genpact India",
      description:
        "Looking at them, it seems that if courageous and needy people are given work, they give their 100% in their work, I have seen Trimbak being built with my own eyes, keep working hard like this and move ahead ",
    },
    {
      img: "https://trimbakinfotech.com/images/201308-gretchen-ho_cover.jpg",
      name: "Sanhita ​Paul",
      postion: "Procurement Lead  - Accenture",
      description:
        "Tremendous people in terms of work, giving them work means just be relaxed now, Team Trimbak heartily best wishes, go ahead and make your name famous ",
    },
    {
      img: "https://trimbakinfotech.com/images/1623391770846.jpg",
      name: "Sharad Chandra",
      postion: "Sr. Manager  - HCL",
      description:
        "The owner of the company himself is connected to the land and this is what makes this team very big, Sachin keep working like this and go ahead ",
    },
    {
      img: "https://trimbakinfotech.com/images/dr_atul_nc_peters_c844d82503.jpg",
      name: "Dr. N. C Atul Peter",
      postion: "Director - Fortis",
      description:
        "Learn from Team Trimbak how to understand the needs of the customers and work on them with all your heart.  special thanks to kapil verma & Sachin Kanojia ",
    },
  ];
  return (
    <>
      <div className="testimonal">
        <h1>Voice Of Customers</h1>
        <div style={{display:"flex",flexWrap:"wrap", width:"68%",margin:"auto",gap:"12px",marginTop:"25px",paddingBottom: "57px",justifyContent:"center"}}>
        {Data2.map((data) => {
          return (
            <>
              <figure class="snip1390">
                <img
                  src={data.img}
                  alt="profile-sample3"
                  class="profile"
                />
                <figcaption>
                  <h2>{data.name}</h2>
                  <h4>{data.postion}</h4>
                  <blockquote>
                    {data.description}
                  </blockquote>
                </figcaption>
              </figure>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}
export default Testimonal;
