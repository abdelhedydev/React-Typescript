import React from 'react'
import { Header, Image } from 'semantic-ui-react'

class About extends React.Component {
  public getAge(){
    const Today = new Date()
    return Today.getFullYear() - 1995
  }
  public render() {
    return (
      <div>
        <Header as='h2'>
          <Image circular={true} src='https://media.licdn.com/dms/image/C5603AQEfX6uOZf5WuQ/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=DF0dK2ZXa1RTGAsKaSocu1z5KwPKisgT4EeiKVhv-dI' /> 
          Abdelhedi Hlel
        </Header>
        <Header as='h3'>
          {this.getAge()} years old / Software Developer
        </Header>
      </div>      
    )
  }
}
export default About
