import React, { Component } from "react";
import "./Header.css";
import Buy from "./Buy.js";
import Sell from "./Sell.js";
import Forums from "./Forums.js";
import Event from "./Event";
import Login from "./Login.js";
import About from "./About.js";

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        view: "about"
      };
      this.changeView = this.changeView.bind(this);
      this.sold = this.sold.bind(this);
    }
    changeView(newView) {
      this.setState({ view: newView });
    }
    sold(changeToBuy) {
      this.setState({view: changeToBuy})
    }
render(){
    return(
        <div>
         <header>

         <button className='headButtons'
            id={this.state.view === "about" ? "current" : ""}
            onClick={() => this.setState({ view: "about" })}     
         >About</button>

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
            id={this.state.view === "event" ? "current" : ""}
            onClick={() => this.setState({ view: "event" })}         
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
        {this.state.view === "about" ? 
             (<About />)
        : this.state.view === "buy" ?
             (< Buy changeView={this.changeView}/>)            
        : this.state.view === "sell" ?
             (<Sell changeView={this.changeView} sold={this.sold}/>)
        : this.state.view === "forums" ?
             (<Forums changeView={this.changeView}/>)
        : this.state.view === "event" ?
             (<Event changeView={this.changeView}/>)
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