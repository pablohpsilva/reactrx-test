import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { default as RXVideo } from 'reactxp-video';

class App extends Component {
  _mountedVideo = undefined;
  
  _onMountVideo = (component) => {
    this._mountedVideo = component;
  }

  _playVideo = () => {
    if (this._mountedVideo) {
      this._mountedVideo.mute(true);
      this._mountedVideo.play();
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <RXVideo
              ref={ this._onMountVideo }
              source={ 'https://www.w3schools.com/html/mov_bbb.mp4' }
              loop={ true }
              onCanPlay={ this._playVideo }
          />
        </header>
      </div>
    );
  }
}

export default App;
