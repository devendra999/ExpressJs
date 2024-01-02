import express from "express";
import users from "./routes/users.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hi I am live");
});

// middlewere or set routes
app.use("/api/users", users);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} yes i am started`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
