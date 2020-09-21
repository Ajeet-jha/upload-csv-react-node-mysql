const express = require("express");
const app = express();
var cors = require("cors");
var multer = require('multer')

const port = 4000;
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("file");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log(req.file);
    return res.status(200).send(req.file);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
