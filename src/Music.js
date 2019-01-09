import React, { Component } from 'react';
import './App.css';


class Music extends Component {
   constructor(props){
    super(props);
  }

  render() {
    let rendAudio = this.props.data;
  
    return (
      <div className="Music">
            <div className='tracksWrapper'>
          {rendAudio.map(function(track){
            //let audio = new Audio(track.song); will be moved 1 level higher

            function handleClick() {
              //on click, it must save the url of clicked song V
              let song = track.song;
              console.log(song);
              //and send it to app X
          };

            return  <div className="track-wrap" key={track.id}>
                      <div className="title-wrap">
                        <p>{track.title}</p>
                      </div>
                      <div className="cover-wrap">
                      <img className="track-cover" id={"audio"} src={track.cover} alt="" onClick={handleClick}/>
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
