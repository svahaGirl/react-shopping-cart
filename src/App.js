// feature 1  new branch for github created
import React from 'react';
import data from "./data.json";
import Products from './components/Products';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      products: data.products,
      size: "",
      sort: "",
    };
  }


  render() { 
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      
      </header>
      <main>Product List
        <div className = "content">
          <div className= "main">
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">Cart Items</div>

        </div>


      </main>

      <footer>All right is reserved.</footer>
    </div>
  );
  }
}

export default App;
