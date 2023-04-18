import Logo from '../assets/Logo.svg'
import Nav from 'react-bootstrap/Nav';

const MyNav = () => {
  return  <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item>
      <img src={Logo} alt={'logo'}/>

    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/menu">Menu</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/reservation">Reservation</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/orderonline">Order Online</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav.Item>

  </Nav>
}

export default MyNav
