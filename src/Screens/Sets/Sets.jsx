import React, { Component } from 'react';

class Sets extends Component {

  render() {
    console.log(this.props)
    return (
      <div class = "container">
        <h1>{this.props.set.name}</h1>
        <img src={this.props.set.logo}/>
      </div>
    );
  }
}

export default Sets;
