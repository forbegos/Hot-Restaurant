// Start with dependencies

const express = require("express");
const path = require("path");

// Setup App
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup array of tables
const waitList = [
  {
    ID: "noone",
    name: "FdO",
    email: "fdo@me.com",
    phone: "777-777-7777",
  },
];

const tables = [
  {
    ID: "forbegos",
    name: "Fernando de Orbegoso",
    email: "forbegos@me.com",
    phone: "303-3033-4444",
  },
  {
    ID: "forbegos34",
    name: "Fernando Mesinas",
    email: "forbegos@icloud.com",
    phone: "555-5555-4444",
  },
  {
    ID: "forbegoso",
    name: "Fernando Jose",
    email: "forbegos@gmail.com",
    phone: "666-6666-6666",
  },
];

// Setting up the routes

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);

app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);

// Add reservation or waitlist if tables full (only 5 tables available)
app.post("api/tables", (req, res) => {
  const newTable = req.body;
  if (tables.length < 4) {
    tables.push(newTable);
  } else {
    waitList.push(newTable);
  }
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
