import React, { Component } from 'react';

class Like extends React.Component {
  // styles = {color :"Tomato" , cursor : "pointer"}
  render() { 
    var classes = "far fa-heart"
    if ( this.props.liked ) classes = "fas fa-heart" ;
    return (
      <i 
        className={classes} 
        style={{ color: "Tomato" , cursor: "pointer"}}
        onClick={this.props.onLiked}></i> 
    );
  }
}
 
export default Like;