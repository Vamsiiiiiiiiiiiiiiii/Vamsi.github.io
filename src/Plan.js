import React, { Component } from  "react";
import PlanItems from "./PlanItems";
import ReactBootstrap from "react-bootstrap";
import "./Plan.css";

class Plan extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this); //Binding the Add Items
        this.deleteItem = this.deleteItem.bind(this); //Binding the Delete Items
    } 

    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState ((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";

            console.log(this.state.items);
            e.preventDefault();
        }
        
    }
       
    deleteItem(key) {
        console.log("Key in delete items:"+ key);
        var filteredItems = this.state.items.filter(function (items) {
            return (items.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return(
            <div className="PlanlistMain">
                <div className="header">
                    <h1 className="title"> Todo Planner </h1>    
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} 
                              placeholder="What's on your mind">
                        </input>
                        <button type="submit"> Add </button>
                        <p className="warning"> <b> Note: </b> Hover the text to delete the item </p>
                    </form>
                </div>
                <PlanItems entries={this.state.items} delete={this.deleteItem}/>
            </div>    
            
        );
    }
}

export default Plan;