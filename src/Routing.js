import { BrowserRouter, Route } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import { Routes } from "react-router-dom"
import Electronics from "./Electronics"
import Laptop from "./Laptop"



function Routing()
{

return(
    <div>
    <BrowserRouter>
    <Nav>
    </Nav>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/electronics" element={<Electronics></Electronics>}></Route>
        <Route path="/laptop" element={<Laptop></Laptop>}></Route>


    </Routes>

    </BrowserRouter>
    </div>
   
)



}
export default Routing