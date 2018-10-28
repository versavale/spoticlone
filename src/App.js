import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '', 
/*     selectedBand: '', */
    url: ''
  }

  this.handleChange = this.handleChange.bind(this);
/*   this.handleSubmit = this.handleSubmit.bind(this); */
  this.fetchData = this.fetchData.bind(this);

  }
/*   handleSubmit(){
    const band = this.state.userInput.toString();
    this.setState({
      selectedBand: band
    });
  } */
  handleChange(e){
    this.setState({
      userInput: e.target.value
    });
  }

  fetchData() {
    const band = this.state.userInput.toString();
    const deezerUrl = 'https://api.deezer.com/' + band;
    this.setState({
      url: deezerUrl
    });
    /* fetch(deezerUrl, {method: 'GET', mode: 'no-cors'})
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err)); */
  }

  render() {
    const displayBand = this.state.selectedBand;
    const url = this.state.url;
    return (
      <div className="App">
        <div className="wrapper">
          <input onChange = {this.handleChange}
          value= {this.state.UserInput}
          placeholder="your favorite artist"></input>
          <button onClick={this.fetchData}>Search</button>
        </div>
        <p>{url}</p>
      </div>
    );
  }
}

export default App;
