import Foodphoto1 from "../assets/Foodphoto1"
const Header =() => {
  return <div className={"MainHeader"}>
<div className={"Mainblurb"}>
  <h1>Little Lemon</h1>
  <h2>Chicago</h2>
  <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
  <button id={"ReserveButton"}>Reserve table </button>
</div>
    <div>
      <img src={Foodphoto1}/>
    </div>
  </div>
}

export default Header