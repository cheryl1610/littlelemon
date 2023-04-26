import Foodphoto1 from "../assets/Foodphoto1"
import {useNavigate} from "react-router-dom";
const Header =() => {
    const navigate = useNavigate()
    const navigateTo = () => {
        navigate('/Reservations');
    }
    return <div className={"MainHeader"}>
<div className={"Mainblurb"}>
  <h1>Little Lemon</h1>
  <h2>Chicago</h2>
  <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
  <button className={"ReservationButton"} aria-label="On Click"
          onClick={navigateTo}>Reserve table </button>
</div>
    <div>
      <img src={Foodphoto1} alt={"baguettes"}/>
    </div>
  </div>
}

export default Header