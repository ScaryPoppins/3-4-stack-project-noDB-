import React from "react";
import axios from "axios";

function Buys(props) {
    return(
    <main className='main'>
        <div id='butts'> 
            <button>delete</button>
            <button>edit</button>
          </div>

        <section className='buyers'>
                 
       <img 
          src={props.item.image}
          id="picture"
        ></img>

       <br/>

        <div className='tabl'>
            <table id='buyinfo'>    
               <tr>
               <td>Price:</td>  <td>{props.item.price}</td>
               </tr>
               <tr>
               <td>Year:</td>  <td>{props.item.year}</td>
               </tr>
               <tr>
               <td>Make:</td>  <td>{props.item.make}</td>
               </tr>
               <tr>
               <td>Model:</td>  <td>{props.item.model}</td>
               </tr>
               <tr>
               <td>Mileage:</td>  <td>{props.item.mileage} miles</td>
               </tr>
               <tr>
               <td> Color:</td>  <td>{props.item.color}</td>
               </tr>
               <tr>
               <td>Offers Free:</td>  <td>{props.item.offering}</td>
               </tr>
               <tr>
               <td>Contact Name:</td>  <td>{props.item.contactName}</td>
               </tr>
               <tr>
               <td>Contact Number:</td>  <td>{props.item.contactNumber}</td>
               </tr>
            </table>
        <br/>
            <table id='buyinfo2'>      
               <tr colspan='2' rowspan ='2'>
               Description:
               </tr>
               <tr>
               {props.item.description}
               </tr>
            </table>
        </div>
       </section>
    </main>
    )
}

export default Buys;
