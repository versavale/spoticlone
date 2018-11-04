import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '',
    pic: '', 
    id: '',
    tracklink: ''
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
    const fetch_url = 'https://api.deezer.com/search/artist/?q=' + band +'&index=0&limit=1&output=json';
      fetch(fetch_url, {method: 'GET', mode: 'cors'})
        .then(response => response.json())
        .then(json => 
          {this.setState({ 
            pic: json.data[0].picture_big,
            tracklink: json.data[0].tracklist,
            id: json.data[0].id,
          })
  })
      .catch(err => console.error('ERRORE:' + err));
  } 


render() {
  return (
    <div className="App">
      <div className="searchWrapper">
        <input onChange = {this.handleChange}
          value= {this.state.UserInput}
          placeholder="your favorite artist"></input>
        <button className="search-btn" onClick={this.fetchData}>Search</button>
      </div>
  <Fetch {...this.state}/>
    </div>
  );
}
}

  class Fetch extends Component {
    constructor(props){
      super(props);
  
  this.state = {

    tr1Title: '',
    tr1Pic: '',
    tr1File: '',

    tr2Title: '',
    tr2Pic: '',
    tr2File: '',

    tr3Title: '',
    tr3Pic: '',
    tr3File: '',

    tr4Title: '',
    tr4Pic: '',
    tr4File: ''
  }
  this.fetchTracks = this.fetchTracks.bind(this);
  }

  fetchTracks(){
    const link= this.props.tracklink;
    fetch(link, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(json => 
      {this.setState({ //USE MAP AT REFACTORING
          tr1Title: json.data[0].title,
          tr1Pic: json.data[0].album.cover_medium,
          tr1File: json.data[0].preview,
          tr2Title: json.data[1].title,
          tr2Pic: json.data[1].album.cover_medium,
          tr2File: json.data[1].preview,
          tr3Title: json.data[2].title,
          tr3Pic: json.data[2].album.cover_medium,
          tr3File: json.data[2].preview,
          tr4Title: json.data[3].title,
          tr4Pic: json.data[3].album.cover_medium,
          tr4File: json.data[3].preview
        })
    }) 
        .catch(err => console.error('ERRORE:' + err));
  }

  render() {
    return (
      <div className="Fetch">
      <div className="imgWrapper">
      <button className="image-btn" onClick={this.fetchTracks}>
        <img className="artistImg" src={this.props.pic} alt=""/>
      </button>
      </div>
        <div className="tracksWrapper">
          <div className="track-wrap">
          <div className="title-wrap">
            <p>{this.state.tr1Title}</p>
            </div>
            <img className="track-cover" src={this.state.tr1Pic} alt=""/>
          </div>
          <div className="track-wrap">
          <div className="title-wrap">
            <p>{this.state.tr2Title}</p>
            </div>
            <img className="track-cover" src={this.state.tr2Pic} alt=""/>
          </div>
          <div className="track-wrap">
          <div className="title-wrap">
            <p>{this.state.tr3Title}</p>
            </div>
            <img className="track-cover" src={this.state.tr3Pic} alt=""/>
          </div>
          <div className="track-wrap">
            <div className="title-wrap">
            <p>{this.state.tr4Title}</p>
            </div>
            <img className="track-cover" src={this.state.tr4Pic} alt=""/>
          </div>
        </div>
        </div>
    );
  }
  }


export default App;
