import express from "express";

const app = express();

app.get("/user", (req, res) => {
  res.json({
    name: "joe",
    usrname: "rat",
    age: 30,
    adress: {
      city: "new york",
      street: "some street 123",
    },
  });
});

app.listen(3000);
console.log(`server port ${3000}`);
