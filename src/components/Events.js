import React from "react";
import "./Events.css";

function Events(props) {
  // console.log({props.eventItem})
  // console.log({props.eventItem.date})
  return (
    <div className='eventMain'>
      {/* console.log({props.eventItem})
      console.log({props.eventItem.date}) */}
    <table id='eventHead'>    
      <tbody>
      <tr>      
        <td colSpan='2' id='eventDate'>{props.eventItem.date}</td>
      </tr>
      <tr>
           <td colSpan='2' id='eventName'>{props.eventItem.name}</td>
        </tr>
       </tbody> 
    </table>

        <img src={props.eventItem.image} id="picture" alt='creepy van'></img>

    <table id='eventInfo'> 
      <tbody> 
        <tr>
           <td>Sponser:</td>   <td>{props.eventItem.sponser}</td>
      </tr>
      <tr>      
           <td>Location:</td>  <td>{props.eventItem.location}</td>
      </tr>
      <tr> 
           <td>Street Address:</td>  <td>{props.eventItem.streetAddress}</td>
        </tr>
      <tr> 
           <td>City State Zip:</td>  <td>{props.eventItem.cityStateZip}</td>
      </tr>     
      </tbody> 

  </table>

    </div>
  );
}
 
export default Events;
