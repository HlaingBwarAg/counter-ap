import React, { Component } from 'react';
import NavBar  from './components/navbar';
import Counters from './components/counters';

class CounterApp extends React.Component {

  state = {
    counters :[
      {id: 1, value: 0 },
      {id: 2, value: 0 },
      {id: 3, value: 0 },
      {id: 4, value: 0 }
    ]
  };

  // constructor(){
  //   super();
  //   console.log("CounterApp-co")
  // }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value ++;
    this.setState({counters})
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value --;
    this.setState({counters})
  }

  handleDelete = (counterId) => {
    console.log("handleDelete is Called", counterId );
    const newCounters = this.state.counters.filter( counter => counter.id !== counterId) 
    this.setState({counters: newCounters})  
  }

  handleReset = () => {
    const counters = this.state.counters.map(
      counter => {counter.value = 0 ; return counter}
    )
    this.setState({counters})
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter( c => c.value > 0).length} />
        <div className='container'>
        <Counters 
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          counters={this.state.counters} />
        </div>
      </React.Fragment>
    );
  }
}
 
export default CounterApp;

