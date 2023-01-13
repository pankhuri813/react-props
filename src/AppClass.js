
  import { Component } from "react";
  import "./App.css"
  
  export default class AppClass extends Component{
  
    render(){
      return (
          <div className="lab">
              <h1>Kalvium Gallery </h1>
              <div className="image">
                  {this.props.imageData.map((elt) => {
                      return <img src={elt.img} alt="elephant" key={elt.id} />;
                  })}
              </div>
          </div>
      );
    }
    
  }