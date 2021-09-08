import React from "react";

const BookingDetails = ({booking, removeBooking}) => {



    return (
        <div>
            <h3>{booking._id}</h3>
            <p>Guest Name: {booking.name}</p>
            <p>Guest Email: {booking.email}</p>
            <button onClick={()=>removeBooking(booking._id)}> 🗑 </button>
        </div>
    )
}

export default BookingDetails