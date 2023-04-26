import Logo from '../assets/Logo.svg'
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

const MyNav = () => {
  return  <Nav>

    <ul className={"nav-list"}>
      <li><img src={Logo} alt={'logo'}/></li>
      <li><Link to={"/home"} >Home</Link></li>
      <li><Link to={"/about"} >About</Link></li>
      <li><Link to={"/menu"} >Menu</Link></li>
      <li><Link to={"/reservations"} >Reservations</Link></li>
      <li><Link to={"/orderOnline"} >Order Online</Link></li>
      <li><Link to={"/Login"} >Login</Link></li>


    </ul>


  </Nav>
}

export default MyNav
