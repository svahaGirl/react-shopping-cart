import React, {Component} from "react";
import Products from "../components/Products";
import Filter from "../components/Filter";
import Cart from "../../components/Cart";

export default class HomeScreen extends Component {

    render(){
        return<div>         
            <div className = "content">
            <div className= "main">

            
            <Filter>              
            </Filter>

            <Products>
            </Products>
            </div>
            <div className="sidebar">
                <Cart/> 
            </div>

        </div></div>;
    }
}