import React, { useEffect, useState } from 'react'
import './App.css';
import {getBookings, deleteBooking} from "./BookingsService";
import BookingSystem from './containers/BookingSystem';


function App() {



  return (
    <div className="App">
    <BookingSystem getBookings ={getBookings} deleteBooking={deleteBooking}/>

    </div>
  );
}

export default App;
