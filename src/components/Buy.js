import React, { Component } from "react";
import "./Buy.css";
import axios from 'axios';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: [],
      loading: true,
      // error: ""
    };
  }

    componentDidMount() {
      axios
        .get("/api/buys")
        .then(response => {
          this.setState({ buyItems: response.data, loading: false });
        })
        // .catch(error => {
        //   console.log(error);
        //   this.setState({ loading: false, error: "An error occurred" });
        // });
    }





    render() {
      const { buyItems } = this.state;
      console.log(buyItems)
      return (
        <div className='main'>
          {/* {buyItems.length ? <h1>{buyItems[1].model}</h1> : null} */}
          {/* {buyItems[1].model} */}
          {/* {this.state.buyItems[1].color} */}
          {/* {buyItems.map((buyItems, index) => (
          key={index} buyItems={buyItems} buyItems={this.updateWishes}
        ))} */}
          {buyItems.length ? 
            buyItems.map((item, index) => {
               return(
                <main key={index} className='main'>
                   <img 
                      src={item.image}
                      id="picture"
                    ></img>

                   <table id='buyinfo' border='1'>
                   <tr>
                   <td>Price:</td>  <td>{item.price}</td>
                   </tr>
                   <tr>
                   <td>Year:</td>  <td>{item.year}</td>
                   </tr>
                   <tr>
                   <td>Make:</td>  <td>{item.make}</td>
                   </tr>
                   <tr>
                   <td>Model:</td>  <td>{item.model}</td>
                   </tr>
                   <tr>
                   <td>Mileage:</td>  <td>{item.mileage}</td>
                   </tr>
                   <tr>
                  <td> Color:</td>  <td>{item.color}</td>
                   </tr>
                   <tr>
                   <td>Offers Free:</td>  <td>{item.offering}</td>
                   </tr>
                   <tr>
                   <td>Contact Name:</td>  <td>{item.contactName}</td>
                   </tr>
                   <tr>
                   <td>Contact Number:</td>  <td>{item.contactNumber}</td>
                   </tr>
                   <tr>
                   <td>Description:</td>  <td>{item.description}</td>
                   </tr>
                   </table>
                   <br/>
                   
                </main>
              )})
          : null}  
          
        </div>
      );
    }
  }


export default Buy;
