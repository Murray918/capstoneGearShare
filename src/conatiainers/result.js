import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className = "result">
        <img src={product.image} />
        <h3>{product.username}</h3>
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
      </div>
    );
  }
}

export default Product;
