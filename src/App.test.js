import {fireEvent, render, screen} from '@testing-library/react';
import BookingForm from './compoments/BookingForm';
import {initializeTimes, updateTimes} from "./compoments/Main";
import userEvent from "@testing-library/user-event";


test('Renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})
test('initializes the times', () => {
    expect(initializeTimes()).toStrictEqual([
        "17:00",
        "17:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "22:30"
    ])
})
test('updates the times', () => {

    expect(updateTimes([], new Date())).toStrictEqual([
        "17:00",
        "17:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "22:30"
    ])
})

test('is valid email', () => {
    render(<BookingForm/>);
    const email = screen.getByPlaceholderText("Enter email")
    expect(email).toBeInTheDocument()
    expect(email).toBeRequired()
    expect(email).toHaveAttribute("type", "email")

})
test('Number if guest', () => {
    render(<BookingForm/>);
    const guestSelect = screen.getByLabelText("Number of guests");
    expect(guestSelect).toBeInTheDocument();
    expect(guestSelect).toBeRequired();
    expect(guestSelect).toHaveAttribute("min","1");
    expect(guestSelect).toHaveAttribute("max","10");
})
test('occassion', () => {
    render(<BookingForm/>);
    const occasionSelect = screen.getByLabelText("Ocassion");
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toBeRequired();
})