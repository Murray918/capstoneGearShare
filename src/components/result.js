import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product } = this.props;

    return (
      <li>
        <img src={product.image} />
        <h3>{product.username}</h3>
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
      </li>
    );
  }
}

export default Product;
