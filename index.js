import express from "express";

const app = express();

app.get("/search", (req, res) => {
  if (req.query.q == "js") {
    res.send("lista de JS");
  } else {
    res.send("algo normal");
  }
});

app.listen(3000);
console.log(`server port ${3000}`);
