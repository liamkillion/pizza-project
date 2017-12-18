import React from 'react'


class ToppingsIndex extends React.Component {

  render(){
    const toppingsList = this.props.toppings.map( (topping) => (
      <p>topping.name</p>
    ));
    return(
      <div>
      {toppingsList}
      </div>
    )
  }
}

export default ToppingsIndex;
