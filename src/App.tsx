import React,{ Component } from 'react';
import { Container } from 'semantic-ui-react'
import About from './components/About/About'
import Education from './components/Education/Education'

class App extends Component {
  public render() {
    return (
      <Container>
        <br/>
          <About />
        <Education />
      </Container>
    );
  }
}

export default App;
