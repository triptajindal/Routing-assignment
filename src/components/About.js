import React, { Component } from 'react';
import AddInfo from './AddInfo';
import Show from './Show';
import './add.css'
class About extends Component {
  state={
    todos:[]
  }
  addInfo=(it)=>{
    it.id=Math.random();
    let todos = [...this.state.todos,it]  ;       //spread operator ...
    this.setState({
      todos: todos
    })
  }

  render() {                       // it is what we want to return something or load on browser//lifecycle of a component
    return (
      <div className="App container">

      <AddInfo  addInfo={this.addInfo}/>
      <Show todos={this.state.todos}/>
      </div>
    );
  }
}

export default About;
