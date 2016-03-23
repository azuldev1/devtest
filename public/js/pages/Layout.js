import React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Radium from "radium";

@Radium
export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			headTitle: 'This is the header title.',
			footTitle: 'This title is for the footer.'	
		}
	}
  render() {
    return (
      <div style={styles.base}>
        <Header title={this.state.headTitle}/>
        <Footer title={this.state.footTitle}/>
      </div>
    );
  }
}

var styles = {
	base:{
		textAlign: 'center',
		fontSize: '3em'
	}
};


