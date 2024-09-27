import "../Style/client.scss";
import Button1 from "./button";
function Client() {
  const img = [
    { img: "https://trimbakinfotech.com/images/genpact.png", time: "0.15s" },
    { img: "https://trimbakinfotech.com/images/image30.png", time: "0.30s" },
    { img: "https://trimbakinfotech.com/images/image31.png", time: "0.45s" },
    { img: "https://trimbakinfotech.com/images/image32.png", time: "1s" },
    { img: "https://trimbakinfotech.com/images/image33.png", time: "1.15s" },
    { img: "https://trimbakinfotech.com/images/image34.png", time: "1.30s" },
    { img: "https://trimbakinfotech.com/images/image42.png", time: "1.45s" },
    { img: "https://trimbakinfotech.com/images/image36.png", time: "0.30s" },
    { img: "https://trimbakinfotech.com/images/image37.png", time: "0.45s" },
    { img: "https://trimbakinfotech.com/images/image38.png", time: "1s" },
    { img: "https://trimbakinfotech.com/images/image39.png", time: "1.15s" },
    { img: "https://trimbakinfotech.com/images/image41.png", time: "1.30s" },
  ];
  return (
    <>
      <p className="Heading">Our Client</p>
      <div
        className="part2"
        style={{ display: "flex", marginTop: "44px", paddingBottom: "57px" }}
      >
        <div className="left">
          <p className="about">
            Trimbak InfoTech, your premier destination for comprehensive IT and
            AMC solutions. With over 24 years of industry experience, we pride
            ourselves on offering top-quality services tailored to your specific
            needs. From Data-Centres and Cloud Computing to Cyber Security and
            Hardware Maintenance, we provide a one-stop solution to streamline
            your operations. Our dedicated team is committed to delivering
            innovative and reliable services to help you achieve your business
            goals. Let us be your trusted IT partner, guiding you every step of
            the way. Explore our services and discover how Trimbak InfoTech can
            elevate your business today.
          </p>
          <div className="but-on">
            <Button1 data="About Us"></Button1>
          </div>
        </div>
        <div
          className="right2"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {img.map((imgs) => {
            return (
              <>
                <div className="imgs">
                  <img
                    src={imgs.img}
                    alt=""
                    srcset=""
                    style={{ animationDelay: imgs.time }}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Client;
