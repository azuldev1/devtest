import React from "react";

export default class Title extends React.Component {
  render() {
  	console.log()
    return (
      <div>
        <h1 style={styles.base}>{this.props.title}</h1>
      </div>
    );
  }
}

var styles = {
	base: {
		margin: '10px',
	}
};