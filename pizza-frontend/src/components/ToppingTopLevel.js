import React from 'react'
import ToppingsIndex from './ToppingsIndex'
import CreateToppings from './CreateToppings'

class ToppingTopLevel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toppings: []
    }
  }

  loadToppingsFromServer = () => {
    fetch('http://localhost:3000/api/v1/toppings', {credentials: 'same-origin'})
    .then(response => response.json())
    .then(json=>{
      this.setState({toppings: json})
    })
  }

  componentDidMount() {
    this.loadToppingsFromServer();
  }

  render(){
    return(
      <div>
        <h1>Top-ping of the Morning to Ye!</h1>
        <ToppingsIndex toppings={this.state.toppings}/>
        <CreateToppings />
      </div>
    )
  }
}

export default ToppingTopLevel;
