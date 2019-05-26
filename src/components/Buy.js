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
    this.buyList = this.buyList.bind(this);
  }


  // for get request
    componentDidMount() {
      axios
        .get("/api/buys")
        .then(response => {
          this.setState({ buyItems: response.data, loading: false });
        })
        .catch(error => {
          console.log(error);  
          this.setState({ loading: false, error: "An error occurred" });
        });
    }


    // for delete request
    buyList(passBuyItems) {
      this.setState({buyItems: passBuyItems})
    }

  // for put (edit) request:

  
  editItem( id, text ) {
    console.log( 'editItem:', id, text ); 
    axios.put('/api/update/' + this.state.id, { text } ).then( response => {
      this.setState({ buyItems: response.data });
    });
  }

    // show on screen
    render() {
      const { buyItems } = this.state;
      return (
        <div className='main'>
            {this.state.loading ? <p>Loading...</p> : null}
            {this.state.error}

           {buyItems.map((item, index) => (
             <Buys key={index} item={item} editItem={this.editItem} buyList={this.buyList}/>))}
             
        </div>
      
    
   
     )
  }
}

export default Buy;
