import React, { useEffect, useState } from 'react'
import './App.css';
import {getBookings, deleteBooking as apiDeleteBooking} from "./BookingsService";
import BookingSystem from './containers/BookingSystem';


function App() {



  return (
    <div className="App">
    <BookingSystem getBookings ={getBookings}/>

    </div>
  );
}

export default App;
