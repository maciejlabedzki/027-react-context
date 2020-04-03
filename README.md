# 027-react-context

```js
const MyContext = React.createContext();
```

```js
      <MyContext.Provider
        value={{
          toys: this.state.store.toys,
          cars: this.state.store.cars,
          incrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.store.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState(
              prevState => ({
                ...prevState,
                store: {
                  ...prevState.store,
                  cars
                }
              }),
              () => {
                console.log(this.state);
              }
            );
          },
          decrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.store.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState(
              prevState => ({
                ...prevState,
                store: {
                  ...prevState.store,
                  cars
                }
              }),
              () => {
                console.log(this.state);
              }
            );
          },
          incrementPriceToy: selectedID => {
            const toys = Object.assign({}, this.state.store.toys);
            toys[selectedID].price = toys[selectedID].price + 1;
            this.setState(
              prevState => ({
                ...prevState,
                store: {
                  ...prevState.store,
                  toys
                }
              }),
              () => {
                console.log(this.state);
              }
            );
          },
          decrementPriceToy: selectedID => {
            console.log("aaa");
            const toys = Object.assign({}, this.state.store.toys);
            toys[selectedID].price = toys[selectedID].price - 1;
            this.setState(
              prevState => ({
                ...prevState,
                store: {
                  ...prevState.store,
                  toys
                }
              }),
              () => {
                console.log(this.state);
              }
            );
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider> 
```

```js
  <MyContext.Consumer>
    {context => (
      <Fragment>
 
            {Object.keys(context.toys).map(toyID => (
              <Toy
                key={toyID}
                name={context.toys[toyID].name}
                price={context.toys[toyID].price}
                incrementPrice={() => context.incrementPriceToy(toyID)}
                decrementPrice={() => context.decrementPriceToy(toyID)}
              />
            ))} 
      </Fragment>
    )}
  </MyContext.Consumer>
  ```
state

nested state update
