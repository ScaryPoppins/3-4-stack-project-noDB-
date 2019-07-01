const express = require("express");
const buyController = require('./controllers/buyController');
const eventsController = require('./controllers/eventsController');
const app = express();


app.use(express.json());

// app.get('/api/buys?color=white', buyController.buys);
//set up function on controller to filter to show white using filter function



// see list
app.get('/api/buys',buyController.buys);

// delete from list
app.delete("/api/delete/:id",buyController.deleteItem);

// add to list
app.post("/api/sell",buyController.sell);




// search by color
app.get('/api/buys/color/:color', buyController.searchColor)
// search by make
app.get('/api/buys/make/:make', buyController.searchMake)
//server for events
app.get('/api/events',eventsController.events);




//edit......not finished...............
app.put('/api/update/:id',buyController.update)




const port = 4040
app.listen(port,() => {
    console.log(`listening on ${port}`)
})