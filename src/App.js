import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userInput: '',
    pic: '', 
    tracklink: '', 
    data: []
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
          }); 
          fetch(this.state.tracklink, {method: 'GET', mode: 'cors'})
          .then(response => response.json())
          .then(json => 
            {this.setState({
              data: [
                {id: json.data[0].id,
              title: json.data[0].title,
              cover: json.data[0].album.cover_medium,
              song: json.data[0].preview, 
              playing: 'false' },

              {id: json.data[1].id,
                title:json.data[1].title,
                cover:json.data[1].album.cover_medium,
                song:json.data[1].preview, 
                playing: 'false'},
    
                {id: json.data[2].id,
                  title:json.data[2].title,
                  cover:json.data[2].album.cover_medium,
                  song:json.data[2].preview, 
                  playing: 'false'},
              
                {id: json.data[3].id,
                  title:json.data[3].title,
                  cover:json.data[3].album.cover_medium,
                  song:json.data[3].preview, 
                  playing: 'false'},
    
                {id: json.data[4].id,
                  title:json.data[4].title,
                  cover:json.data[4].album.cover_medium,
                  song:json.data[4].preview, 
                  playing: 'false'},
    
                {id: json.data[5].id,
                  title:json.data[5].title,
                  cover:json.data[5].album.cover_medium,
                  song:json.data[5].preview, 
                  playing: 'false'},
    
                {id: json.data[6].id,
                  title:json.data[6].title,
                  cover:json.data[6].album.cover_medium,
                  song:json.data[6].preview, 
                  playing: 'false'},
    
                {id: json.data[7].id,
                  title:json.data[7].title,
                  cover:json.data[7].album.cover_medium,
                  song:json.data[7].preview, 
                  playing: 'false'}
            ]
            });
          });
  })
      .catch(err => console.error('ERRORE:' + err));
  } 


render() {
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
      <Music {...this.state}/>
        </div>
  );
}
}

  class Music extends Component {

  render() {
    let rendAudio = this.props.data;

    return (
      <div className="Music">
            <div className='tracksWrapper'>
          {rendAudio.map(function(track){
            let audio = new Audio(track.song);

            function togglePlay() {
           if (track.playing === 'false') {
            audio.play();
            track.playing = 'true';
            console.log("play");
           } else if (track.playing === 'true') {
            audio.pause();
            track.playing = 'false';
            console.log("mute");
            }
          };

            return  <div className="track-wrap" key={track.id}>
                      <div className="title-wrap">
                        <p>{track.title}</p>
                      </div>
                      <div className="cover-wrap">
                      <img className="track-cover" id={"audio"} src={track.cover} alt="" onClick={togglePlay}/>
            {/*   <img className="play" src={'/img/play.svg'} alt="" onClick={togglePlay} />
                  <img className="pause" src={'/img/pause.svg'} alt="" onClick={togglePlay} /> */}
                   </div>
                    </div>
          })}
      </div>
      <script>
      </script>
    </div>
    );
  }
  }
export default App;
