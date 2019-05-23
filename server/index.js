const express = require("express");
const buyController = require('./controllers/buyController');
const app = express();


app.use(express.json());

app.get('/api/buys', buyController.buys);





const port = 4040
app.listen(port,() => {
    console.log(`listening on ${port}`)
})