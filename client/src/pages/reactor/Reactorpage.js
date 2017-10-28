import React, { Component } from 'react';
//import NavbarBrandNew from "../components/navbar";
import Sidebarmenunew from "../../components/Sidebarmenunew";
 import Newcompomenu from "../../components/Newcompomenu";
import FissionButton from "../../components/FissionButton";
//set up the Drag and Drop tool
import ReactDOM from 'react-dom';
//import Draggable from 'react-draggable'; // The default
import { Draggable, Droppable } from 'react-drag-and-drop';
import RaisedButton from "material-ui/RaisedButton";
 import "./Reactorpage.css";
import CodeEditor from "../../components/Editor";

//make a bunch of buttons with this data and label them like drag and drop menu?
//set up the render?
//hmmmmmm  convert to class instead of const here since I'm passing data through?
//

/* old test buttons  <Row>
<Draggable type ="usercompo" data="menucompo"><span><RaisedButton> This is menu compo</RaisedButton></span></Draggable>
<Draggable type ="usercompo" data="Navbarcompo"><span><RaisedButton> This is a Navbar compo</RaisedButton></span></Draggable>
<Draggable type ="notgoodcompo" data="Footercompo"><span><RaisedButton> This is a Footer comppo</RaisedButton></span></Draggable>
</Row>
*/


class  Reactor  extends Component {
  //set the state of the page to be what the component is in this case (can do later)
  showData =()=> this.setState({

  });


  onDrop(data){
  console.log(data)

  }

  render(){
  return(


    <div>

      <h2>A preview of the components you have created and styled: </h2>
      <p>  Use the editor below for any final edits, or to add more components you would like to use</p>
      <p> If you are happy with what you see, click the Fission button to save you work</p>
    
      <Droppable types ={['usercompo']} 
          onDrop ={this.onDrop.bind(this)}>
            <div id="preview">This should present a preview of the file</div>
      </Droppable>
     <FissionButton />
    </div>
  )}
}

export default Reactor;