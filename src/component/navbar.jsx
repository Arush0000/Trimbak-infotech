import { Link } from "react-router-dom";
import "../Style/Navbar.css"
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo"><img src="logo_trim.png" alt="" srcset="" /></div>
        <div className="content">
          <Link to="/" className="active" >Home</Link>
          <Link to={"/career"}>Career</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
