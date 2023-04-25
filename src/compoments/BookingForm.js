import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const DetailsSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const BookingForm = ({availableTimes = [], dispatch, submitForm}) => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    const [details, setDetails] = useState(true)


    const dateChanged = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch(selectedDate)
    }
    const mySubmit = (e) => {
        e.preventDefault()
        // submitForm({
        //     date, time, guests, occasion
        // })
        setDetails(!details)
    }
    return <div>
        <h2>Reserve a table</h2>
        {details ?
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
            : <div>
                <div>
                    <div>
                        <p>Table for: {guests}</p>
                        <p>Date:{date}</p>
                        <p>Time:{time}</p>
                    </div>
                    <button onClick={event => setDetails(!details)}>Amend</button>
                </div>
                <Formik initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    phonenumber:'',
                }} onSubmit={e => {
                }} validationSchema={DetailsSchema}>
                    <Form>
                        <div>
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                            />

                            <ErrorMessage name="firstName" component="div"/>
                        </div>
                        <div>
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Enter surname"
                            />
                            <ErrorMessage name="lastName" component="div"/>
                        </div>
                        <div>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                            <ErrorMessage name="email" component="div"/>
                        </div>
                        <div>
                            <Field
                                type="tel"
                                name="phonenumber"
                                placeholder="Enter mobile number"
                            />
                            <ErrorMessage name="phonenumber" component="div"/>
                        </div>

                        <div>
                            <Field
                                type="textarea"
                                name="additionalcomments"
                                placeholder="Additional comments"
                                as={"textarea"}
                            />
                        </div>
                        <button type={"submit"}>Reserve Table</button>

                    </Form>
                </Formik>

            </div>
        }
    </div>
}
export default BookingForm