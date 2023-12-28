const express = require("express");
const app = express();
const port = 5000;

// get request
//----------------------------------
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// send json
//----------------------------------
app.get("/person", (req, res) => {
  let person = {
    id: 99988,
    name: "Devendra",
    email: "dev.kumar89.dp@gmail.com",
    mobile: 9998858662,
  };
  res.json(person);
});

// Routing
//----------------------------------
// Respond with Hello World! on the homepage:
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Respond to POST request on the root route (/), the application’s home page:
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

// Respond to a PUT request to the /user route:
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

// Respond to a DELETE request to the /user route:
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

// for run apps
app.listen(
  port,
  () => {
    console.log(`Example app listening on port ${port}`);
  },
  () => console.log("server started PORT: 5000")
);
