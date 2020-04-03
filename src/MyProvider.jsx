import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
  state = {
    store: {
      cars: {
        car001: { name: "Honda", price: 100 },
        car002: { name: "BMW", price: 150 },
        car003: { name: "Mercedes", price: 200 }
      },
      toys: {
        t001: { name: "bannana", price: 4 },
        t002: { name: "lego", price: 33 },
        t003: { name: "bear", price: 22 }
      }
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          toys: this.state.store.toys,
          cars: this.state.store.cars,
          incrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.store.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState(prevState => ({
              ...prevState,
              store: {
                ...prevState.store,
                cars
              }
            }));
          },
          decrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.store.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState(prevState => ({
              ...prevState,
              store: {
                ...prevState.store,
                cars
              }
            }));
          },
          incrementPriceToy: selectedID => {
            const toys = Object.assign({}, this.state.store.toys);
            toys[selectedID].price = toys[selectedID].price + 1;
            this.setState(prevState => ({
              ...prevState,
              store: {
                ...prevState.store,
                toys
              }
            }));
          },
          decrementPriceToy: selectedID => {
            console.log("aaa");
            const toys = Object.assign({}, this.state.store.toys);
            toys[selectedID].price = toys[selectedID].price - 1;
            this.setState(prevState => ({
              ...prevState,
              store: {
                ...prevState.store,
                toys
              }
            }));
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
