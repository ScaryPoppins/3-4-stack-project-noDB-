import React, { Component } from "react";
import "./Buy.css";
import axios from 'axios';
import Buys from './Buys';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: [],
      loading: true,
      error: ""
    };
    this.updateBuys = this.updateBuys.bind(this);
  }

    componentDidMount() {
      axios
        .get("/api/buys")
        .then(response => {
          this.setState({ buyItems: response.data, loading: false });
        })
        .catch(error => {
          this.setState({ loading: false, error: "An error occurred" });
        });
    }

    updateBuys(passBuyItems) {
      this.setState({buyItems: passBuyItems})
    }



    render() {
      const { buyItems } = this.state;
      console.log(buyItems)
      return (
        <div className='main'>
            {this.state.loading ? <p>Loading...</p> : null}
            {this.state.error}

           {buyItems.map((item, index) => (
             <Buys key={index} item={item} updateBuys={this.updateBuys}/>))}
            
        </div>
      
    
   
     )
  }
}

export default Buy;
