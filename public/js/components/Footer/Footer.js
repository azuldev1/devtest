import React from "react";
import Title from "../Header/Title.js";
import Pizza from "./Modal-Example.js";
import Radium from "radium";

@Radium
export default class Footer extends React.Component {
  render() {
    return (
      <div style={styles.footTitle}>
        <Title title={this.props.title}/>
        <Pizza />
      </div>
    );
  }
};

var styles = {
  footTitle: {
  	padding: '0px',
    color: 'black',
    backgroundColor: 'yellow',
   	':hover': {
      backgroundColor: 'white',
      color: 'yellow'
    },
  }
};