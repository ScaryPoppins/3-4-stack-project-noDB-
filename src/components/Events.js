import React from "react";
import "./Events.css";
import axios from "axios";

function Events(props) {
  // console.log({props.eventItem})
  // console.log({props.eventItem.date})
  return (
    <div className='main'>
      {/* console.log({props.eventItem})
      console.log({props.eventItem.date}) */}
    <table id='eventHead'>    
      <tbody>
      <tr>      
        <td colSpan='2'>Date : {props.eventItem.date}</td>
      </tr>
      <tr>
           <td colSpan='2'>Name: {props.eventItem.name}</td>
        </tr>
       </tbody> 
    </table>

        <img src={props.eventItem.image} id="picture" ></img>

    <table id='eventInfo'> 
      <tbody> 
        <tr>
           <td>Sponser</td>   <td>{props.eventItem.sponser}</td>
      </tr>
      <tr>      
           <td>Location</td>  <td>{props.eventItem.location}</td>
      </tr>
      <tr> 
           <td>Street Address</td>  <td>{props.eventItem.streetAddress}</td>
        </tr>
      <tr> 
           <td>City State Zip</td>  <td>{props.eventItem.cityStateZip}</td>
      </tr>     
      </tbody> 

  </table>
    </div>
  );
}
 
export default Events;
