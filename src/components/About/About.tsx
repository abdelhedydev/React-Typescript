import React from 'react'
import { Header, Image } from 'semantic-ui-react'
interface Iprops{
  name:string ;
  year:number;
  img:string
}
class About extends React.Component<Iprops,{}> {
  public static defaulltProps: Partial<Iprops> = {
    img: "https://image.flaticon.com/icons/svg/236/236831.svg",
    name: "User",
    year:1995,
  };
  public getAge(){
    const { year } = this.props
    const Today = new Date()
    return Today.getFullYear() - year
  }
  public render() {
    return (
      <div>
        <Header as='h2'>
          <Image circular={true} src={this.props.img} /> 
          {this.props.name}
        </Header>
        <Header as='h3'>
          {this.getAge()} years old / Software Developer
        </Header>
      </div>      
    )
  }
}
export default About
