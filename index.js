const express = require("express");

const app = express();

app.use(() => {
  console.log("hello");
  console.log("hello server");
  console.log("Selamat datang");
});

app.listen(4000);
