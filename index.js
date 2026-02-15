const express = require("express");
const app = express();

// DO NOT hardcode the port. Beanstalk sets PORT automatically.
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello! This app is running on Elastic Beanstalk.</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
