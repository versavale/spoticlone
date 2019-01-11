import React, { Component } from 'react';
import './App.css';


class Music extends Component {

  render() {
    let rendAudio = this.props.data;
    let playMusic = this.props.playMusic;
  
    return (
      <div className="Music">
            <div className='tracksWrapper'>
          {rendAudio.map(function(track){

            return  <div className="track-wrap" key={track.id}>
                      <div className="title-wrap">
                        <p>{track.title}</p>
                      </div>
                      <div className="cover-wrap">
                      <img className="track-cover" id={"audio"} src={track.cover} alt="" onClick={() => playMusic(track.song)}/>
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

export default Music;
