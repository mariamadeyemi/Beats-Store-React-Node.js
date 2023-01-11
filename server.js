const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cors)

app.get("/", (req, res) => {
res.send("Hello World!");
});

// app.get("/api", async(req, res) => {
//   res.json({"users": ["userOne", "userTwo", "userThree"]});
//   });

app.post("/post_name", async(req, res) => {
  let {name} = req.body
  console.log(name);
    console.log("Connected to React");
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
