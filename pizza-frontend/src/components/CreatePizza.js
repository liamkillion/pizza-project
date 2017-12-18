import React from 'react'


class CreatePizza extends React.Component {
  constructor() {
    super();
    this.state = {
      pizzaName: '',
      toppings: []
    };
  }

    loadToppingsFromServer = () => {
      fetch('http://localhost:3000/api/v1/toppings')
      .then(response => response.json())
      .then(json=>{
        this.setState({toppings: json})
      })
    }

    componentDidMount() {
      this.loadToppingsFromServer();
    }


  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createPizza(this.state)
  }

  createPizza = (pizzaData) => {
    fetch('http://localhost:3001/api/v1/pizzas', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(pizzaData)
    })
      .then(res => res.json())
      .then(console.log)
  }


  render () {
    const toppingsList = this.state.toppings.map( (topping) => (
      <option value={topping.name} name={topping.name}>{this.name}</option>
    ));
    return(
      <div>
        <h3>Make a pizza!</h3>
        <p>Pizza Name:</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <select value={this.state.value} onChange={this.handleChange}>
          {toppingsList}
        </select>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default CreatePizza;
