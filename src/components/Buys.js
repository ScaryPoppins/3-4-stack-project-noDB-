import React from "react";
import axios from "axios";

function Buys(props) {
    // console.log(props.item.id)

let edit = [<td><button className='editButton'>Edit</button></td>];

    return(
    <main className='main'>
        <div id='butts'> 
            <button
                      onClick={() => {
                        axios.delete("/api/delete/" + props.item.id).then(response => {
                          props.updateBuys(response.data);
                        });
                      }}
            
            >Delete</button>
            
          </div>

        <section className='buyers'>
                 
       <img 
          src={props.item.image}
          id="picture"
        ></img>

       <br/>


        <div className='tabl'>
            <table id='buyinfo'>    
            <tbody>
               <tr>
                   <td>Price:</td><td>{props.item.price}</td>{edit}
               </tr>
               <tr>
                  <td>Year:</td><td>{props.item.year}</td>{edit} 
               </tr>
               <tr>
                  <td>Make:</td><td>{props.item.make}</td>{edit} 
               </tr>
               <tr>
                  <td>Model:</td><td>{props.item.model}</td>{edit} 
               </tr>
               <tr>
                  <td>Mileage:</td><td>{props.item.mileage} miles</td>{edit} 
               </tr>
               <tr>
                  <td> Color:</td><td>{props.item.color}</td>{edit} 
               </tr>
               <tr>
                  <td>Offers Free:</td><td>{props.item.offering}</td>{edit} 
               </tr>
               <tr>
                  <td>Contact Name:</td><td>{props.item.contactName}</td>{edit} 
               </tr>
               <tr>
                  <td>Contact Number:</td><td>{props.item.contactNumber}</td> {edit} 
               </tr>
            </tbody>   
            </table>
        <br/>
            <table id='buyinfo2'>   
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
