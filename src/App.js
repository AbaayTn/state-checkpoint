import React from 'react';
import './App.css';
import myImage from './Houssem.jpg'

class App extends React.Component {

    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

    tick() {
    this.setState({
      date: new Date()
    });
  }

  state={
    person:{
      fullName:"houssem gharbi",
      bio:"I love developing",
      imgSrc:myImage,
      profession:"Engineer"
    },
    show : true
    
    };
    
    handleShowPerson = () => {
    this.setState({
      ...this.state.person,
      show: !this.state.show,
    })}



  render(){
  return(
    <div className="App">
    {this.state.show && (
      <>
    
        <h1>{this.state.person.fullName}</h1>
        <h1>{this.state.person.bio}</h1>
        <img src={this.state.person.imgSrc} alt="" style={{width:'200px',height:'200px'}}></img>
        <h1>{this.state.person.profession}</h1>
        <br></br>
        </>)}
        <button onClick={this.handleShowPerson}>Click here</button><br />

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  )
  }
  }

export default App;
