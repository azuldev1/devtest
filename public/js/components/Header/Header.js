import React from "react";
import Title from "./Title.js";
import Radium from "radium";

@Radium
export default class Header extends React.Component {
  render() {
    return (
      <div style={styles.headTitle}>
        <Title title={this.props.title}/>
      </div>
    );
  }
};

var styles = {
  headTitle: {
  	padding: '0px',
  	backgroundColor: 'black',
    color: 'yellow',
   	':hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  }
};
