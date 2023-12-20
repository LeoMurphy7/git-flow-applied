import React from "react";
import Home from "../../components/home";

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {color:'red'}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({color:'green'})
    }, 1000);
  }

  componentDidUpdate(){
    document.getElementById("mydiv").innerHTML = "The new favroit color is"+ this.state.color
  }

  changeColorBlue = () => {this.setState({color:"blue"})};
  changeColorRed = () => {this.setState({color: "red"})}

  render(){
    return (
      <div>
        <h1>My favroit color is {this.state.color}</h1>
        <h1>My favroit car is {this.props.name}</h1>
        <Home/>
        <div id="mydiv"></div>
        <button onClick={this.changeColorBlue}>Click me to change blue</button>
        <button onClick={this.changeColorRed}>Click me to change Red</button>
      </div>
    )
  }
}
export default HomePage;
