import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '',
    url: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.fetchURL = this.fetchURL.bind(this);
  this.fetchData = this.fetchData.bind(this);

  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    });
  }

  fetchURL() {
    const band = this.state.userInput.toString();
    const deezerUrl = 'https://api.deezer.com/search/artist/?q=' + band +'&index=0&limit=2&output=json';
    this.setState({
      url: deezerUrl
    });
  }

  fetchData() {
    fetch(this.state.url, {method: 'GET', mode: 'no-cors'})
    .then(res => res.json())
    .then((out) => {

        console.log('Output: ', out);
}).catch(err => console.error(err));
  }

  render() {
    const url = this.state.url;
    return (
      <div className="App">
        <div className="wrapper">
          <input onChange = {this.handleChange}
          value= {this.state.UserInput}
          placeholder="your favorite artist"></input>
          <button onClick={this.fetchURL}>Search</button>
        </div>
        <a href={url}>{url}</a>
      </div>
    );
  }
}

export default App;
