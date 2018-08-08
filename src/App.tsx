import React,{ Component } from 'react';
import { Container } from 'semantic-ui-react'
import About from './components/About/About'
import Education from './components/Education/Education'

class App extends Component {
  public render() {
    return (
      <Container>
        <br/>
        <About name="Abdelhedi hlel" year={1995} img= "https://media.licdn.com/dms/image/C5603AQEfX6uOZf5WuQ/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=DF0dK2ZXa1RTGAsKaSocu1z5KwPKisgT4EeiKVhv-dI"/>
          <hr/>
        <Education />
      </Container>
    );
  }
}

export default App;
