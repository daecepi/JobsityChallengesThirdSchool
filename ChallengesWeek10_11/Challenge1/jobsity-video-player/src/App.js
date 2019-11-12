import React from 'react';
import './App.css';
import ParentPlayer from './components/ParentPlayer/ParentPlayer';

/**
 * Assets is the variable that expects the video player for the base video/os it is going to manage
 */
const assets = [
  {
    id: "Video 1",
    assets: [
        {
          id: "adjasdk",
          name: "Escapada con amigos",
          normal: "./videos/BaseVideo.mp4",
          legacy: "./videos/BaseVIdeo.webm",
        }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <ParentPlayer
        identifier={assets[0].id}
        height="100"
        width="100"
        mode="edit"
        assets={assets[0].assets}
      />
    </div>
  );
}

export default App;
