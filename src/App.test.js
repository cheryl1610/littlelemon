import {render, screen} from '@testing-library/react';
import BookingForm from './compoments/BookingForm';
import {initializeTimes, updateTimes} from "./compoments/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})
test('initializes the times', () => {
    expect(initializeTimes()).toStrictEqual([
        "17:00",
        "17:30",
        "18:00",
        "19:00",
        "19:30",
        "20:30",
        "22:30"
    ])
})
test('updates the times', () => {

    expect(updateTimes([], new Date())).toStrictEqual([
        "17:00",
        "17:30",
        "18:00",
        "19:00",
        "19:30",
        "20:30",
        "22:30"
    ])
})