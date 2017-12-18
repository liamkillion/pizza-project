import React from 'react'
import PizzaIndex from './PizzaIndex'
import CreatePizza from './CreatePizza'

class PizzaTopLevel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pizzas: []
    }
  }

  loadPizzasFromServer = () => {
    fetch('http://localhost:3000/api/v1/pizzas', {credentials: 'same-origin'})
    .then(response => response.json())
    .then(json=>{
      this.setState({pizzas: json})
    })
  }

  componentDidMount() {
    this.loadPizzasFromServer();
  }

  render(){
    return(
      <div>
        <h1>Welcome to the Pizza-Dome!</h1>
        <PizzaIndex pizzas={this.state.pizzas}/>
        <CreatePizza />
      </div>
    )
  }
}

export default PizzaTopLevel;
