import React from "react";
import axios from "axios";

function Buys(props) {
    // console.log(props.item.id)

let edit = [<button className='buttons'>Edit</button>];
let deleted = [<button className='buttons'
   onClick={() => {
     axios.delete("/api/delete/" + props.item.id).then(response => {
       props.updateBuys(response.data);
     });
   }}
>Delete</button>]







    return(
    <main className='buyMain' >

        <div id='butts'> 
            {deleted}
            {edit}
          </div>

        <section className='buyers'>
         
       <div>  
       <img 
          src={props.item.image}
          id="picture"
        ></img>
        </div>

       <br/>


        <div className='tabl'>
            <table id='buyInfo'>    
            <tbody id='buyBody'>
               <tr>
                   <td>Price:</td><td>{props.item.price}</td>
               </tr>
               <tr>
                  <td>Year:</td><td>{props.item.year}</td> 
               </tr>
               <tr>
                  <td>Make:</td><td>{props.item.make}</td>
               </tr>
               <tr>
                  <td>Model:</td><td>{props.item.model}</td>
               </tr>
               <tr>
                  <td>Mileage:</td><td>{props.item.mileage} miles</td>
               </tr>
               <tr>
                  <td> Color:</td><td>{props.item.color}</td>
               </tr>
               <tr>
                  <td>Offers Free:</td><td>{props.item.offering}</td>
               </tr>
               <tr>
                  <td>Contact Name:</td><td>{props.item.contactName}</td>
               </tr>
               <tr>
                  <td>Contact Number:</td><td>{props.item.contactNumber}</td> 
               </tr>
            </tbody>   
            </table>
        <br/>
            <table id='buyInfo2'>   
            <tbody>
               <tr rowSpan ='2'>
               <td>Description:</td>
               </tr>
               <tr>
               <td>{props.item.description}</td>
               </tr>
            </tbody>   
            </table>
        </div>
       </section>
    </main>
    )
}

export default Buys;
