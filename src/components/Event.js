import React, { Component } from "react";
import "./Events.css";
import axios from 'axios';
import Events from './Events';

class Event extends Component {
    constructor(props) {
      super(props);
      this.state = {
        eventItems: [],
        loading: true,
        error: ""
      };
      this.updateEvents = this.updateEvents.bind(this);
    }
  
      componentDidMount() {
        axios
          .get("/api/events")
          .then(response => {
            this.setState({ eventItems: response.data, loading: false });
          })
          .catch(error => {
            console.log(error);  
            this.setState({ loading: false, error: "An error occurred" });
          });
      }
  
      updateEvents(passEventItems) {
        this.setState({eventItems: passEventItems})
      }

      render() {
        const { eventItems } = this.state;
        console.log(eventItems)
        return (
          <div className='main'>
              {this.state.loading ? <p>Loading...</p> : null}
              {this.state.error}
  
             {eventItems.map((eventItem, index) => (
               <Events key={index} eventItem={eventItem} updateEvents={this.updateEvents}/>))}
               
          </div>
        
      
     
       )
    }
  }
  
  export default Event;
  