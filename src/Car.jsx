import React from "react";

const Car = props => (
  <tr>
    <td> {props.name}</td>
    <td>{props.price}</td>
    <td>
      <button onClick={props.incrementPrice}>increment </button>
    </td>
    <td>
      <button onClick={props.decrementPrice}>decrement </button>
    </td>
  </tr>
);

export default Car;
