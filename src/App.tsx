import React,{ Component } from 'react';
import User from './components/User';
import './css/App.css';

class App extends Component {
  public render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <User name="abdelhedi" />
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
