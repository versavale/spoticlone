import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '',
    pic: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.fetchData = this.fetchData.bind(this);

  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    });
  }

  fetchData() {
    const band = this.state.userInput.replace(/ /g,"-");
    const fetch_url = 'https://api.deezer.com/search/artist/?q=' + band +'&index=0&limit=2&output=json';
      fetch(fetch_url, {method: 'GET', mode: 'cors'})
        .then(response => response.json())
        .then(json => 
          {this.setState({ 
            pic: json.data[0].picture_big});
      })
      .catch(err => console.error(err));
  }

  render() {
    const artistPicture = this.state.pic;
    return (
      <div className="App">
        <div className="wrapper">
          <input onChange = {this.handleChange}
          value= {this.state.UserInput}
          placeholder="your favorite artist"></input>
          <button onClick={this.fetchData}>Search</button>
        </div>
        <div>
        <img src={artistPicture} alt="Cheetah!" />
        </div>
      </div>
    );
  }
}

export default App;
