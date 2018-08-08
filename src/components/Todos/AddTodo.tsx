// import React, { Component } from 'react'
import React from 'react'

interface Iprops {
  name: string;
  number: string;
}
export default class AddTodo extends React.Component<Iprops,{}> {
  
  public render() {
    return (
      <div>
        <h1>
          Hello from {this.props.name} and  sgvdsgd {this.props.number}!
    </h1>;
                </div>
    )
  }
}
/*
export default class AddTodo extends Component {
    public add (){
      alert('goo')
      }
  
  public render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button type="button">Add Task</button>
        </form>
      </div>
    );
  }
}
*/
