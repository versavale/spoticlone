import React, { Component } from 'react';
import './App.css';
import Music from './Music.js';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '',
    pic: '', 
    tracklink: '', 
    data: [],
    playing: '',
    musicOn: false
  }

  this.handleChange = this.handleChange.bind(this);
  this.fetchData = this.fetchData.bind(this);
  this.playMusic = this.playMusic.bind(this);
  }

  playMusic(arg) {
    let audio = new Audio(arg);
    if (this.playing !== arg) {
    this.setState({
      playing: arg,
      musicOn: true
    });
    audio.play();
  
  } else if (this.playing === arg && this.musicOn === true) {
    audio.pause();
    this.setState({
      musicOn: false
    });
    audio.pause();
  }
    //this must work with state.playing.
    //if playing is empty, playing becomes the clicked and the audio plays - isMusic true
    //if playing is full, playing replaces playing and the audio plays - isMusic true
    //if playing is full by the same song - is music false
    console.log(this.state.playing);
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
          }); 
          fetch(this.state.tracklink, {method: 'GET', mode: 'cors'})
          .then(response => response.json())
          .then(json => 
            {this.setState({
              data: [
                {id: json.data[0].id,
              title: json.data[0].title,
              cover: json.data[0].album.cover_medium,
              song: json.data[0].preview},

              {id: json.data[1].id,
                title:json.data[1].title,
                cover:json.data[1].album.cover_medium,
                song:json.data[1].preview},
    
                {id: json.data[2].id,
                  title:json.data[2].title,
                  cover:json.data[2].album.cover_medium,
                  song:json.data[2].preview},
              
                {id: json.data[3].id,
                  title:json.data[3].title,
                  cover:json.data[3].album.cover_medium,
                  song:json.data[3].preview},
    
                {id: json.data[4].id,
                  title:json.data[4].title,
                  cover:json.data[4].album.cover_medium,
                  song:json.data[4].preview},
    
                {id: json.data[5].id,
                  title:json.data[5].title,
                  cover:json.data[5].album.cover_medium,
                  song:json.data[5].preview},
    
                {id: json.data[6].id,
                  title:json.data[6].title,
                  cover:json.data[6].album.cover_medium,
                  song:json.data[6].preview},
    
                {id: json.data[7].id,
                  title:json.data[7].title,
                  cover:json.data[7].album.cover_medium,
                  song:json.data[7].preview}
            ]
            });
          });
  })
      .catch(err => console.error('ERRORE:' + err));
  } 


render() {
  let playMusic = this.playMusic;
  return (
    <div className="App">
      <h1 className="mainHeader">Spotify Clone</h1>
      <div className="searchWrapper">
        <input onChange = {this.handleChange}
          value= {this.state.UserInput}
          placeholder="your favorite artist"></input>
        <button className="search-btn" onClick={this.fetchData}>Search</button>
      </div>
      <div className="imgWrapper">
          <img className="artistImg" src={this.state.pic} alt=""/>
      </div>
      <Music {...this.state} playMusic = {playMusic.bind(this)}/>
        </div>
  );
}
}

export default App;
