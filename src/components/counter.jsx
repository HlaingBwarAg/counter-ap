import React, { Component } from 'react';

class Counter extends React.Component {
    
  styles = {
        fontSize: 15,
        fontWeight: "bold"
    }

    // componentDidUpdate(prevProps, prevState){
    //   console.log('prevProps', prevProps)
    //   console.log('prevState', prevState)
    // }
  
    render() {
        return (
            <div className='row'>
              <div className="col-1">
                <span style={this.styles} className={this.getBadgeColour()}>{this.formatCount()}</span>
              </div>
              <div className="col">
                {/* <h5>Counter {this.props.counter.id}</h5> */}
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button>
                {/* {this.state.tags.length === 0 && "Please add some tags"} */}
                {/* {this.renderTags()} */}
                <button 
                  onClick={() => this.props.onDecrement(this.props.counter)} 
                  className='btn btn-secondary btn-sm m-2' 
                  disabled={this.props.counter.value === 0 ? "disabled" : ""} > - </button>
                <button 
                  onClick={() => this.props.onDelete(this.props.counter.id)} 
                  className='btn btn-danger btn-sm '>x</button>
              </div>
            </div>


        );
    }
    // renderTags (){
    //     if (this.state.tags.length === 0 ) return <p>There are no tags!</p>;

    //     return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    getBadgeColour() {
        let classes = " badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    decrementDisable() {
      
    }

    formatCount(){
        const {value: count} = this.props.counter
        return count === 0 ? "Zero" : count 
    }
}
 
export default Counter;