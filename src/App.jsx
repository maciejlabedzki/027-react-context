// based on article : https://www.toptal.com/react/react-context-api

import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyProvider from "./MyProvider";
import ProductList from "./ProductList";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

// eslint-disable-next-line
import Carousel from "./Carousel";

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <Jumbotron>
              <h1>Welcome to my web store</h1>
              {/* <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p> */}
            </Jumbotron>
          </header>
          {/* <Carousel /> */}
          <ProductList />
        </div>
      </MyProvider>
    );
  }
}

export default App;
