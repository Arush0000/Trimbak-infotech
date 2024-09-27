import Hero1 from "../component/hero1";
import Hero2 from "../component/hero2";
import Navbar from "../component/navbar";
import Services from "../component/Service";
import Testimonal from "../component/testimonial";
import Client1 from "../component/client1";
import QueryForm from "../component/queryform";

function Home (){
    return <>
         <Navbar></Navbar>
         <Hero1/>
         <Hero2></Hero2>
         <Services></Services>
         <Testimonal/>
         <Client1></Client1>
         <QueryForm></QueryForm>
         
</>
}
export default Home ;
