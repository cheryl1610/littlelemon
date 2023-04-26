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
    phonenumber: Yup.string().required('Required'),
});

const BookingForm = ({availableTimes = [], dispatch, submitForm}) => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("None")
    const [details, setDetails] = useState(true)


    const dateChanged = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch(selectedDate)
    }
    const mySubmit = (e) => {
        e.preventDefault()
        setDetails(!details)
    }


    const minDate = new Date().toISOString().substring(0,10);
    return <div>
        <h2>Reserve a table</h2>
        {details ?
            <div className={"Reserform"} >

                <form style={{display: "grid", maxWidth: 200, gap: 10}} onSubmit={mySubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} min={minDate} required={true} onChange={dateChanged}/>

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} required={true} onChange={e => setTime(e.target.value)}>
                        <option></option>
                        {availableTimes.map(time => <option>{time}</option>)}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder={""} min={1} max={10} id="guests" value={guests} required={true}
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
<div className={"radio"}>
    <input type={"radio"} value={"inside"} name="area" /> Inside
                    <input type={"radio"} value={"outside"} name="area" /> Outside
</div>
                    <input type="submit" className={"ReservationButton"} defaultValue="Make Your reservation"/>

                </form>
            </div>
            : <div>
                <div >
                    <div className={"Pending"}>
                        <p>Table for: {guests}</p>
                        <p>Date:{date}</p>
                        <p>Time:{time}</p>
                    </div>
                    <button className={"ReservationButton"} aria-label="On Click" onClick={event => setDetails(!details)}>Amend</button>
                </div>
                <Formik initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phonenumber: '',
                }} onSubmit={values => {
                    submitForm({
                        date, time, guests, occasion, ...values
                    })
                }}
                        validationSchema={DetailsSchema}>
                    <Form>
                        <div className={"detailForm"}>
                        <div className={"fieldGroup"} >
                            <label htmlFor={"lastName"}>First Name</label>
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                            />

                            <ErrorMessage name="firstName" component="div"/>
                        </div>
                            <div className={"fieldGroup"} >
                            <label htmlFor={"lastName"}>Last Name</label>
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Enter surname"
                            />
                            <ErrorMessage name="lastName" component="div"/>
                        </div>
                            <div className={"fieldGroup"} >
                            <label htmlFor={"email"}>Email Address</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                            <ErrorMessage name="email" component="div"/>
                        </div>
                        <div className={"fieldGroup"}>
                            <label htmlFor={"phonenumber"}>Contact Number</label>
                            <Field
                                type="tel"
                                name="phonenumber"
                                placeholder="Enter mobile number"
                            />
                            <ErrorMessage name="phonenumber" component="div"/>
                        </div>

                        <div className={"fieldGroup"}>
                            <label htmlFor={"additionalcomments"}>Additional Comments </label>

                            <Field
                                type="textarea"
                                name="additionalcomments"
                                placeholder="Additional comments"
                                as={"textarea"}
                            />
                        </div>
                            <p>By submitting the reserve table button you agree to confirming a table reservation and unable to make anymore amendments </p>
                        <button className={"ReservationButton"} aria-label="On Click" type={"submit"}>
                            Reserve Table
                        </button>
                        </div>
                    </Form>
                </Formik>

            </div>
        }
    </div>
}
export default BookingForm