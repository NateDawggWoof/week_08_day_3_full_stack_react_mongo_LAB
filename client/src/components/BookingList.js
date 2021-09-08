import React from "react";
import BookingDetails from "./BookingDetails";

const BookingList = ({bookings, removeBooking}) => {
    const bookingLayout = bookings.map((booking) => {
        return <BookingDetails booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })




    return (
        <div>
            {bookingLayout}
        </div>
    )
}

export default BookingList