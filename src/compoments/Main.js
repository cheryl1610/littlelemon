import Homepage from "./Homepage";
import {Route, Routes, useNavigate} from 'react-router-dom'
import NotImplementedPage from "./NotImplementedPage";
import React, {useReducer} from "react";
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../metaApi";
import ConfirmedBooking from "./ConfirmedBooking";

export const updateTimes = (state, date) => {
    return fetchAPI(new Date(date))
}
export const initializeTimes = () => {
    return fetchAPI(new Date())
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    const navigate = useNavigate();
    const submitForm = (formData) => {
        console.log(formData)
        const successful = submitAPI(formData);
        if (successful) {
            navigate('/confirmedBooking')
        }
    }
    return <main>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/home" element={<Homepage/>}></Route>
            <Route path="/about" element={<NotImplementedPage name={"about"}/>}></Route>
            <Route path="/menu" element={<NotImplementedPage name={"menu"}/>}></Route>
            <Route path="/reservations"
                   element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
            <Route path="/orderOnline" element={<NotImplementedPage name={"order online"}/>}></Route>
            <Route path="/confirmedBooking" element={<ConfirmedBooking/>}></Route>
        </Routes>
    </main>;
}

export default Main
