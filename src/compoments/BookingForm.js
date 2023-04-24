import {useState} from "react";

const BookingForm = ({availableTimes = [], dispatch, submitForm}) => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")


    const dateChanged = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch(selectedDate)
    }
    const mySubmit = (e) => {
        e.preventDefault()
        submitForm({
            date, time, guests, occasion
        })
    }
    return <div>
        <h2>Reserve a table</h2>
        <form style={{display: "grid", maxWidth: 200, gap: 20}} onSubmit={mySubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={dateChanged}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes.map(time => <option>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder={1} min={1} max={10} id="guests" value={guests}
                   onChange={(e) => setGuests(e.target.value)}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" id="occasion"
                    value={occasion}
                    onChange={(event => setOccasion(event.target.value))}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Other Celebrations</option>
                <option>None</option>
            </select>

            <input type="submit" defaultValue="Make Your reservation"/>
        </form>
    </div>
}
export default BookingForm