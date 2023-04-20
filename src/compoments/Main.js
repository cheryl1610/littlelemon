import Homepage from "./Homepage";
import {Routes, Route} from 'react-router-dom'
import NotImplementedPage from "./NotImplementedPage";
import React from "react";
import Reservations from "./Reservations";

function Main() {
    return <main>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/home" element={<Homepage/>}></Route>
            <Route path="/about" element={<NotImplementedPage name={"about"}/>}></Route>
            <Route path="/menu" element={<NotImplementedPage name={"menu"}/>}></Route>
            <Route path="/reservations" element={<Reservations/>}></Route>
            <Route path="/orderOnline" element={<NotImplementedPage name={"order online"}/>}></Route>
        </Routes>
    </main>;
}

export default Main
