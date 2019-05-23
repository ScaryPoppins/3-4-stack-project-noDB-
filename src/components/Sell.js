import React, { Component } from "react";
import "./Sell.css";

function Sell() {
  return (
    <div className='main'>
        ID: TBD
        <form className='sellForm'> 
            <input type='text' name='imageURL'placeholder='imageURL'></input>
            <input type='text' name='Year'placeholder='Year'></input>
            <input type='text' name='Make'placeholder='Make'></input>
            <input type='text' name='Model'placeholder='Model'></input>
            <input type='text' name='Mileage'placeholder='Mileage'></input>
            <input type='text' name='Color'placeholder='Color'></input>
            <input type='text' name='Free Offering'placeholder='Free Offering'></input>
            <input type='text' name='Contact Name'placeholder='Contact Name'></input>
            <input type='text' name='Contact Info'placeholder='Contact Info'></input>
            <input type='submit' value='Submit'></input>
        </form>

    </div>
  );
}

export default Sell;
