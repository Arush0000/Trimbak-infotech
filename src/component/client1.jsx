
import "../Style/client.scss";
import Client from "./client";
function Client1() {
  return (
    <>
    <div className="client"style={{height:"auto"}}>
    <div style={{ width: "75%", margin: "auto" }}>
    
      <h1>When It Comes To Reliability, We Are The One You Need! </h1>
      <p className="p1">
        Even while we're helping you solve your business challenges today, we're
        thinking about the future - and how we can take you there. Which is what
        gives you the competitive edge in what's to come.
      </p>
      <div className="video">
        <iframe
          width="958"
          height="539"
          src="https://www.youtube.com/embed/GPX-U3Mwkqc"
          title="The Alisha &amp; Garima Diaries | HP Pavilion | 60secs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Client></Client>
      </div>
      </div>
    </>
  );
}
export default Client1;
