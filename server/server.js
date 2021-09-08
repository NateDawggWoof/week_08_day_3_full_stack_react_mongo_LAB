const express = require('express');
const app = express();
const MongoClient= require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

const cors = require('cors')

app.use(express.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
.then((client) => {
    const db =client.db('hotel_lab');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter= createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter)
})

app.listen(5000, function (){
    console.log(`listening on port ${ this.address().port}`);
})

