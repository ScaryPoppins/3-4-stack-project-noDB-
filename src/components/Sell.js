import React, { Component } from "react";
import "./Sell.css";
import axios from "axios";
// import buyController from '../server/controllers/buyController';


class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      price:'',
      year:'',
      make:'',
      model:'',
      mileage:'',
      color:'',
      offering:'',
      contactName:'',
      contactNumber:'',
      description:''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  
  render() {
  let {image,price,year, make, model, mileage, color, offering, contactName, contactNumber, description} = this.state;
  let thc=this.handleChange;
  return (
    <div className='main'>
        <form className='sellForm'
               onSubmit={e => {
                e.preventDefault();
                 axios
                 .post("/api/sell", {
                    image,
                    price,
                    year,
                    make,
                    model,
                    mileage,
                    color,
                    offering,
                    contactName,
                    contactNumber,
                    description
                 })
                .then(response => {
                    console.log(response.data);
                     this.props.sold('buy')
                })
                .catch(error => {
                    console.log(error);
                });              
              }}>  
          <table id='sellBody'>
          <tbody>    
{/* Van information */}
            <tr className ='addLabel'><td>Image URL:</td><td><input type='text' name='image'placeholder='imageURL' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Price:</td><td><input type='text' name='price'placeholder='Price' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Year:</td><td><input type='text' name='year'placeholder='Year' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Make:</td><td><input type='text' name='make'placeholder='Make' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Model:</td><td><input type='text' name='model'placeholder='Model' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Mileage:</td><td><input type='text' name='mileage'placeholder='Mileage' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Color:</td><td><input type='text' name='color'placeholder='Color' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Free Offering:</td><td><input type='text' name='offering'placeholder='Free Offering' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Contact Name:</td><td><input type='text' name='contactName'placeholder='Contact Name' onChange={thc}></input></td></tr>
            <tr className ='addLabel'><td>Contact Number:</td><td><input type='text' name='contactNumber'placeholder='Contact Number' onChange={thc}></input></td></tr>
{/* Description  */}
            <tr className ='addLabel' colSpan ='2'>
              <td>Description: </td>
              <td colSpan = "2"><input type='text' name='description'placeholder='Description' onChange={thc}></input></td></tr>
          </tbody>
          </table>
{/* Submit */}
          <button id='submit' type='submit' value='Submit'>submit</button>
          
          
        </form>
    </div>
  );
}
}
export default Sell;



