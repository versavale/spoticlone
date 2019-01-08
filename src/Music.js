import React, { Component } from 'react';
import './App.css';

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

export default Music;