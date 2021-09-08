use hotel_lab;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John Smith",
    email: "john.smith@gmail.com",
    checkedIn: false,
  },
  {
    name: "Barbra Jones",
    email: "Barbra.Jones@gmail.com",
    checkedIn: false,
  },
  {
    name: "David Walker",
    email: "David.Walker@hotmail.com",
    checkedIn: false,
  },
  {
    name: "Julian Assange",
    email: "sparrow1337@wikileeks.net.org",
    checkedIn: false,
  }
]);
