import React, { Fragment } from "react";
import MyContext from "./MyContext";
import Car from "./Car";

import Table from "react-bootstrap/Table";

const Cars = () => (
  <MyContext.Consumer>
    {context => (
      <Fragment>
        <h4>Cars:</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Car Name</th>
              <th>How Many</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(context.cars).map(carID => (
              <Car
                key={carID}
                name={context.cars[carID].name}
                price={context.cars[carID].price}
                incrementPrice={() => context.incrementPrice(carID)}
                decrementPrice={() => context.decrementPrice(carID)}
              />
            ))}
          </tbody>
        </Table>
      </Fragment>
    )}
  </MyContext.Consumer>
);

export default Cars;
