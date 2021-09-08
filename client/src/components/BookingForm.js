import React, { useState } from "react";
import { postBooking } from "../BookingsService";


const BookingForm = ({addBooking}) => {
    const [formData, setFormData] = useState({})



    const onSubmit = (event) => {
        event.preventDefault();
        console.log('formdata', formData)
        postBooking(formData).then((data)=> {
            addBooking(data)
        })
       
    }

    const onChange = (event) => {
        formData[event.target.id] = event.target.value
        setFormData(formData)
    }



    return (
        <div>

            <form onSubmit={onSubmit} id="bookings-form" method="post">
            <h2>Add Booking</h2>

            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>
            <div className="formWrap">
                <label htmlFor="checkedIn">Check In?:</label>
                <input onChange={onChange} type="checkbox" id="checkedIn"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

        </div>
    )
}

export default BookingForm