const buyItems = [
    {
        id: 1,
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--rPjC8x1n--/c_fit,f_auto,fl_progressive,q_80,w_636/18r6nnbg5yjj1jpg.jpg',
        price: "about $350",
        year: '1994',
        make: 'Dodge',
        model: 'Van',
        mileage: '10,000',
        color: ['red'],
        offering: 'candy',
        contactName: 'Mike Jones',
        contactNumber: '281-330-8004',
        description: "For sale is the best candy van ever.   I've had plenty of satisfied customers throughout the years, and so will you."
        
    },
    {
        id: 2,
        image: 'https://farm5.staticflickr.com/4658/28074207609_54497871d4_b.jpg',
        price: 'about $350',
        year: '1987',
        make: 'Toyota',
        model: 'Van',
        mileage: '345,000',
        color: 'blue',
        offering: 'candy',
        contactName: 'Jenny',
        contactNumber: '867-5309',
        description: 'This was once a famous van back in the day.  This is your chance to buy a piece of history.  Many of folks have gone for a ride in this candy van.'
        
    },
    {
        id: 3,
        image: 'https://pics.me.me/rare-ton-rare-pokemon-inside-3208476.png',
        price: '400 mewtwo candy',
        year: '2010',
        make: 'Dodge',
        model: 'Ram Van',
        mileage: '249,900',
        color: 'white',
        offering: 'pokemon',
        contactName: 'Alexander Graham Bell',
        contactNumber: '1',
        description: "Attract young 30-something year olds nerds with this van"
        
    },
  ];
    let currentID =0;

  const buys = (req, res) => {
    res.json(buyItems);
  };

  const sell = (req, res) => {
    //   console.log(req.body)
    //   console.log(req.body.id)
    // let id = req.body.id;
    // req.body.
    currentID=buyItems.length
        console.log(currentID)
    req.body.id=currentID+1;
        console.log(req.body.id)
    buyItems.push(req.body);
    res.json(buyItems);
  };
  const deleteItem = (req, res) => {
    const index = buyItems.findIndex(element => element.id == req.params.id);
    buyItems.splice(index, 1);
    res.json(buyItems);
  }

  module.exports = {
      buys, 
      sell,
      deleteItem
  };