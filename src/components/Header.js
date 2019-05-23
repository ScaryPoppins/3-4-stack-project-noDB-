import React, { Component } from "react";
import "./Header.css";
import Buy from "./Buy.js";
import Sell from "./Sell.js";
import Forums from "./Forums.js";
import Events from "./Events";
import Login from "./Login.js";

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        view: "buy"
      };
      this.changeView = this.changeView.bind(this);
    }
    changeView(newView) {
      this.setState({ view: newView });
    }

render(){
    return(
        <div>
    <header>
         <button className='headButtons'
            id={this.state.view === "buy" ? "current" : ""}
            onClick={() => this.setState({ view: "buy" })}
         >Vans For Sale</button>

         <button className='headButtons'
            id={this.state.view === "sell" ? "current" : ""}
            onClick={() => this.setState({ view: "sell" })}         
         >Sell A Van</button>

         <button className='headButtons'
            id={this.state.view === "forums" ? "current" : ""}
            onClick={() => this.setState({ view: "forums" })} 
         >Forums</button>

         <button className='headButtons'
            id={this.state.view === "events" ? "current" : ""}
            onClick={() => this.setState({ view: "events" })}         
         >Events</button>

         <button className='headButtons'
            id={this.state.view === "signin" ? "current" : ""}
            onClick={() => this.setState({ view: "signin" })}         
         >Sign In</button>


        {/* {this.state.view === "buy" ? (
          <Buy />
        ) : (
          <Sell changeView={this.changeView} />
        )} */}


        {/* {
            if (this.state.view === "buy"){
            <Buy />
        }
        else if(this.state.view === "sell"){
            <Sell />
        }
        } */}
        </header>
    <div>
        {this.state.view === "buy" ? 
             (<Buy />)
        : this.state.view === "sell" ?
             (<Sell changeView={this.changeView}/>)
        : this.state.view === "forums" ?
             (<Forums changeView={this.changeView}/>)
        : this.state.view === "events" ?
             (<Events changeView={this.changeView}/>)
        : this.state.view === "signin" ?
             (<Login changeView={this.changeView}/>)
        : "Something went wrong"
}
    </div>
  
    </div>
)
}
    
}
export default Header;