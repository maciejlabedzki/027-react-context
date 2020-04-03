import React, { Fragment } from "react";
import MyContext from "./MyContext";
import Toy from "./Toy";

import Table from "react-bootstrap/Table";

const Toys = () => (
  <MyContext.Consumer>
    {context => (
      <Fragment>
        <h4>Toys:</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>How Many</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(context.toys).map(toyID => (
              <Toy
                key={toyID}
                name={context.toys[toyID].name}
                price={context.toys[toyID].price}
                incrementPrice={() => context.incrementPriceToy(toyID)}
                decrementPrice={() => context.decrementPriceToy(toyID)}
              />
            ))}
          </tbody>
        </Table>
      </Fragment>
    )}
  </MyContext.Consumer>
);

export default Toys;
