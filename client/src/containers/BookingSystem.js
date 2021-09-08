import React, { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";

const BookingSystem = ({getBookings, deleteBooking}) => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
      getBookings()
      .then((allBookings) => {
        setBookings(allBookings);
      })
    },[])

    const addBooking = (booking) => {
      const temp = bookings.map( booking => booking);
      temp.push(booking);
      setBookings(booking)
    } 

    const removeBooking = (id) =>{
      deleteBooking(id).then(()=>{
      const temp = bookings.map(booking => booking)
      const indexDel = temp.map(booking => booking._id).indexOf(id)
      temp.splice(indexDel,1)
      setBookings(temp)
      })
    }



    return (
        <div>
            <h2>I'm the container</h2>
            <BookingForm addBooking={addBooking}/>
            <BookingList bookings={bookings} removeBooking={removeBooking}/>
        </div>
    )
}

export default BookingSystem