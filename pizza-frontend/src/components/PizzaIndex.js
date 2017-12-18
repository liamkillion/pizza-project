import React from 'react'
import PizzaRow from './PizzaRow'

class PizzaIndex extends React.Component{

  render(){
    const pizzaList = this.props.pizzas.map( (pizza) => (
      <PizzaRow pizza={pizza}/>
    ));
    return(
      <div>All the Pizzas
      {pizzaList}
      </div>
    )
  }
}

export default PizzaIndex;
