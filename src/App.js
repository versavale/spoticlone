import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '',
    pic: '', 
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
    const fetch_url = 'https://api.deezer.com/search/artist/?q=' + band +'&index=0&limit=2&output=json';
      fetch(fetch_url, {method: 'GET', mode: 'cors'})
        .then(response => response.json())
        .then(json => 
          {this.setState({ 
            pic: json.data[0].picture_big,
            tracklink: json.data[0].tracklist
          });
      })
      .catch(err => console.error(err));
  }

  render() {
    const artistPicture = this.state.pic;
    const tracklist = this.state.tracklink;
    return (
      <div className="App">
        <div className="wrapper">
          <input onChange = {this.handleChange}
          value= {this.state.UserInput}
          placeholder="your favorite artist"></input>
          <button onClick={this.fetchData}>Search</button>
        </div>
        <div className="imgWrapper">
        <img className="artistImg" src={artistPicture} alt=""/>
        </div>
        <p>{tracklist}</p>
        <Tracks passedVal={this.state.tracklink}/>
      </div>
    );
  }
}


class Tracks extends Component {
  constructor(props){
    super(props);

   this.state = {
/*     tr1Title: '',
    tr1Pic: '',
    tr1File: '',
    passedVal: '' */
  }

  this.fetchTracks = this.fetchTracks.bind();
  }

  
  fetchTracks() {
    /* const link = this.props.passedVal; */
/*       fetch(link, {method: 'GET', mode: 'cors'})
        .then(response => response.json())
        .then(json => 
          {this.setState({ 
            tr1Title: json.data[0].title,
            tr1Pic: json.data[0].album.cover_medium,
            tr1File: json.data[0].preview
          });
      })
      .catch(err => console.error(err)); */
  } 
  render() {
/*     const trackTitle = this.state.tr1Title;
    const trackPic = this.state.tr1Pic; */
    /* const trackAudio = this.state.tr1File; */
    const link = this.props.passedVal;
    return (
      <div className="Tracks">
        <div className="tracks__wrapper">
        <button onClick={this.fetchTracks}></button>
          <p>{link}</p>
          {/* <img className="trackPic" src={trackPic} alt=""/> */}
        </div>
      </div>
    );
  }



}
export default App;
