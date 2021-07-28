const path = require("path");
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 8880;
const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("../public"));
// app.use(express.static("files"));
// app.use("/static", express.static(path.join(__dirname, "..", "public")));
// static file-serving middleware
// app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => console.log(`serving on port ${PORT}`));

module.exports = app;
