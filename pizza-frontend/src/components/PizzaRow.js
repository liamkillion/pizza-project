import React from 'react';


class PizzaRow extends React.Component{

  handleDelete = (event) =>{
    let target = event.target.value
    let deleteURL = `http://localhost:3000/api/v1/pizzas`+target
    fetch(deleteURL, {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      }
    })
  }

  render(){
    const toppingList = this.props.pizza.toppings.map( (topping) => (
     <li>topping.name</li>
     ));
    var divStyle = {
      background: "#eee",
      padding: "20px",
      margin: "20px",
      "text-align": "left"
    }

    return(
      <div style={divStyle}>
        <p>name: {this.props.pizza.name}</p>
        <ul>
          {toppingList}
        </ul>
        <button onClick={this.handleDelete} value={this.props.pizza.id}>Delete This Pizza</button>
      </div>
    )
  }
}


export default PizzaRow;
