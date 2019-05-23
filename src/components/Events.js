import React, { Component } from "react";
import "./Events.css";

function Events() {
  return (
    <div className='main'>
        <div id='eventInfo'>Event Date: May 31st</div>
        <img src="http://static1.squarespace.com/static/53ea6294e4b089fd92ae8f57/598b5e19a803bbd59bd85902/5cd42869e79c70daf0767eef/1557408213043/59640452_1372749399539674_3407672042428825600_o.jpg?format=1500w" width='20%'></img>
        <div id='eventInfo'>Event Name: Cure for the Candy</div>
        <div id='eventInfo'>Location: Dallas Childrens Hospital</div>
        <div id='eventInfo'>Street Address: 1934 Dallas Pkwy</div>
        <div id='eventInfo'>Street Address 2: Dallas TX, 75063</div>
    </div>
  );
}

export default Events;
