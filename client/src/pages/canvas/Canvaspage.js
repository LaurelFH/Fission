import React, { Component } from 'react';
import {Container, Row, Col} from "../../components/Grid";
import Newcompomenu from "../../components/Newcompomenu";
import Previewdisplay from "../../components/Displaycode";
import ListCanvas from "../../components/List/ListCanvas";
import ListReactor from "../../components/List/ListReactor";
import API from "../../utils/api"
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {profile: state.user.profile}
}

class Canvas extends Component {

    state = {
      components: {},
      customs: {},
      reactor: [],
      preview: {},
      active: {},
      sidebar: false,
      editor: true,
      tab: "canvas"
    }

  componentDidMount(){
    if(localStorage.getItem("auth0Id")){
      let auth0Id = localStorage.getItem("auth0Id")
      API.user.findOne(auth0Id)
        .then(user => {
          this.props.dispatch({type: "LOGIN", payload: {profile: user.data}})
          this.updateCustoms()
        });
    }

    API.component.findGroups()
      .then( db => {
        this.setState({components: db.data})
      })
      .catch( err => console.log(err))
  }
  
  updateCustoms = () => {
    API.component.findCustoms(this.props.profile._id)
    .then( db => {
      this.setState({customs: db.data})
    })
    .catch( err => console.log(err))
  }
  
  toggleSidebar = () => {
    this.setState({sidebar: !this.state.sidebar})
  };

  toggleEditor = () => this.setState({editor: !this.state.editor})

  updateTab = (tab) => {
    this.setState({tab: tab})
    if(tab === "reactor" && this.state.sidebar){
      this.setState({sidebar: false})
    }
  }

  handlePreview = (newCompo) => {
    this.setState({preview: newCompo})
  }

  handleClick = (newCompo, tab) => {
    switch(tab){
      case "canvas":
        this.setState({active: newCompo});
        break
      case "reactor":
        this.setState({reactor: [...this.state.reactor, newCompo]})
        break
      default:
        return ""
    }
  }

  render(){
  return(

      <Container style={{width: "80%", height: "100%"}}>
        <Newcompomenu sidebar={this.state.sidebar}/>
        <Row>

          <Col size={4}>
            { this.state.tab === "canvas" ?
              <ListCanvas 
                components={this.state.components}
                customs={this.state.customs}
                handleClick={this.handleClick}
                tab={this.state.tab}/>
            :
              <ListReactor
              customs={this.state.customs} 
              components={this.state.components}
              handleClick={this.handleClick}
              tab={this.state.tab}/>  
            }
          </Col> 

          <Col size={8}>    
            <Previewdisplay
              profile={this.props.profile}
              active={this.state.active}
              editor={this.state.editor}
              toggleSidebar={this.toggleSidebar}
              toggleEditor={this.toggleEditor}
              updateTab={this.updateTab}
              tab={this.state.tab}
              reactor={this.state.reactor}
              updateCustoms={this.props.updateCustoms}
              handlePreview={this.handlePreview}
              preview={this.state.preview}/>
          </Col>

        </Row>
      </Container>
  )};
}

export default connect(mapStateToProps)(Canvas);