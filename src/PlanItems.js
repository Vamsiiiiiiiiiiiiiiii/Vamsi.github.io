import React, { Component } from "react";
import FilpMove from "react-flip-move"; // External Transitions for ReactJS

class PlanItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(items) {
        return <li onClick={() => this.delete(items.key)}
                    key={items.key}>{items.text}</li>
    }

    delete(key) {
        console.log("Key is :"+ key);
        this.props.delete(key);
    }


    render() {
        var PlanEntries = this.props.entries;
        var listItems = PlanEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FilpMove duration={350} easing="ease-in">    
                    {listItems}
                </FilpMove>
            </ul>
        );
    }
}

export default PlanItems;