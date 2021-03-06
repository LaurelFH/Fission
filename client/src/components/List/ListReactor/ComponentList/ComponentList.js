import React, { Component } from "react";
import { List } from 'material-ui/List';
import ComponentItem from "./ComponentItem";

class ComponentList extends Component {
    state = {

    }

    render(){
        return(
            <List className="List" style={{maxHeight: "67vh", overflow: "scroll"}}>
                {Object.keys(this.props.components).map(group =>
                        <ComponentItem 
                            key={group}
                            tab={this.props.tab}
                            updateActiveProject={this.props.updateActiveProject}
                            addComponent={this.props.addComponent}
                            components={this.props.components} 
                            group={group}/>
                  )
                }
            </List>
        )
    };
};

export default ComponentList;