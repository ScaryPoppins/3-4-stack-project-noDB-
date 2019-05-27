import React, { Component } from "react";
import "./Buy.css";
import axios from 'axios';
import Buys from './Buys';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: [],
      loading: true,
      userSearchColor: '',
      userSearchMake: '',
      error: ""

    };
    this.buyList = this.buyList.bind(this);
  }

// for COLOR search request
  handleChangeColor(text){
    this.setState({userSearchColor: text});
}
  searchColor(){
    axios.get(`/api/buys/color/${this.state.userSearchColor}`)
        .then(res => this.setState({buyItems: res.data }))
}

// for MAKE search request
handleChangeMake(text){
  console.log(text)
  this.setState({userSearchMake: text})
}
searchMake(){
console.log(this.state.userSearchMake)
  axios.get(`/api/buys/make/${this.state.userSearchMake}`)
      .then(res => this.setState({buyItems: res.data }))
}

  // for get request
   componentDidMount() {
      axios
        .get("/api/buys")
        .then(response => {
          this.setState({ buyItems: response.data, loading: false });
        })
        .catch(error => {
          console.log(error);  
          this.setState({ loading: false, error: "An error occurred" });
        });
    }


    // for delete request
    buyList(passBuyItems) {
      this.setState({buyItems: passBuyItems})
    }

  // for put (edit) request:

  
  editItem( id, text ) {
    // console.log([this.state.item.id])
    console.log(this.state.item)
    // console.log( 'editItem:', id, text ); 
    axios.put('/api/update/' + this.props.item.id, { text } ).then( response => {
      this.setState({ buyItems: response.data });
    });
  }

    // show on screen
    render() {
      const { buyItems } = this.state;
        return(



//  loading information
        <div className='main'>
            {this.state.loading ? <p>Loading...</p> : null}
            {this.state.error}

          <div className='search1'>
             
  {/* show all button */}
             <button className='buttons'
              onClick={()=> 
              // this.props.sold('buy')
              window.location.reload()

            }
             
             
             > Show All </button>
             

  {/* COLOR search button */}
            <section className='colorSearch'>
               <input type='field' placeholder='Search by Color' 
                  onChange={(e) => this.handleChangeColor(e.target.value)} />
               <button onClick={()=> {
                 console.log(this.state.userSearchColor)
                 this.searchColor(this.state.userSearchColor)}}
                 className = 'buttons'
                 >Search</button>
            </section> 
            </div>
            <div>
  {/* Make search button */}
              <section className='search2'>
               <input type='field' placeholder='Search by Make' 
                   onChange={(e) => this.handleChangeMake(e.target.value)} />
               <button onClick={()=> {
                
                 this.searchMake(this.state.userSearchMake)}}
                 className = 'buttons'
                 >Search</button>
            </section> 
            </div>
            
  {/* show on screen */}
           {buyItems.map((item, index) => (
             <Buys key={index} item={item} editItem={this.editItem} buyList={this.buyList}/>))}
             
        </div>
      
    
   
     )
  }
}

export default Buy;
