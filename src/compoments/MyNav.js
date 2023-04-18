import Logo from '../assets/Logo.svg'
import Nav from 'react-bootstrap/Nav';

const MyNav = () => {
  return  <Nav>

    <ul className={"nav-list"}>
      <li><img src={Logo} alt={'logo'}/></li>
      <li><a href={"/home"}>Home</a></li>
      <li><a href={"/about"}>About</a></li>
      <li><a href={"/menu"}>Menu</a></li>
      <li><a href={"/reservation"}>Reservations</a></li>
      <li><a href={"/orderOnline"}>Order Online</a></li>
      <li><a href={"/login"}>Login</a></li>
    </ul>


  </Nav>
}

export default MyNav
