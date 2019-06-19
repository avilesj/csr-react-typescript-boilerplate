const path = require( "path");
const fs = require( "fs");
const express = require( "express");

const PORT = 8080
const app = express()
const router = express.Router()

router.use(
  express.static(path.resolve(__dirname, "..", "dist", "web"), { maxAge: "30d" })
);

app.use(router)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'resources', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Boilerplate is running on ${PORT}`)
})

