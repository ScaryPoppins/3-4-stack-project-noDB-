const express = require("express");
const buyController = require('./controllers/buyController');
const eventsController = require('./controllers/eventsController');
const app = express();


app.use(express.json());

// app.get('/api/buys?color=white', buyController.buys);
//set up function on controller to filter to show white using filter function


app.get('/api/buys',buyController.buys);
app.delete("/api/delete/:id",buyController.deleteItem);
app.post("/api/sell",buyController.sell);

//experiment.........................................
app.put('/api/update/:id',buyController.update)

//server for events
app.get('/api/events',eventsController.events);

const port = 4040
app.listen(port,() => {
    console.log(`listening on ${port}`)
})