import React from 'react'

export default class User extends React.Component {
    public props : {
        name:string,
    }
  public render() {
    return (
      <div>
        This is my info {this.props.name}
        
      </div>
    )
  }
}
