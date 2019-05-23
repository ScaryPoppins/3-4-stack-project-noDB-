const express = require("express");
const app = express();
app.use(express.json());




const port = 4040
app.listen(port,() => {
    console.log(`listening on ${port}`)
})