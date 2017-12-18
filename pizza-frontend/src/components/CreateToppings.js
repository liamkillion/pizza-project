import React from 'react'


class CreateToppings extends React.Component {
  constructor() {
    super();

    this.state = {
      toppingName: '',
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createTopping(this.state)
  }

  createTopping = (toppingData) => {
    fetch('http://localhost:3000/api/v1/toppings', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(toppingData)
    })
      .then(res => res.json())
      .then(console.log)
  }


  render () {
    return(
      <div>
        <h3>Make a Topping!</h3>
        <p>Topping Name:</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default CreateToppings;
