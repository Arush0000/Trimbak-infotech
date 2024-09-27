import Home from "./Screen/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Career from "./Screen/career";
import About from "./Screen/About";
import Contact1 from "./Screen/contact1";
function App(){
  return<>
  
  <Router>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
            <Route path="/career" element={<Career/>}>Career</Route>
            <Route path="/About" element={<About/>}>About</Route>
            <Route path="/Contact" element={<Contact1/>}>Contact</Route>
        </Routes>
    </Router>

  </>
}
export default App;