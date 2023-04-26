import {useNavigate} from "react-router-dom";

const ConfirmedBooking = () => {
    const navigate = useNavigate()
    const navigateTo = () => navigate('/home')

    return <div className={"ReserveComp"}>
        <h2>Reservation Completed</h2>
        <p>Congratulations!</p>
        <p>You have successfully reserved a table!</p>
        <button className={"BackButton"} aria-label="On Click"

                onClick={navigateTo}>Home</button>

    </div>
}
export default ConfirmedBooking