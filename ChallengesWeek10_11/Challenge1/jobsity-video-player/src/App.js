import React from 'react';
import './App.css';
import ParentPlayer from './components/ParentPlayer';

/**
 * Assets is the variable that expects the video player for the base video/os it is going to manage
 */
const assets = [
  {
    id: "Video 1",
    assets: [{
          id: "adjasdk",
          name: "React course episode 7",
          urlNormal: "../../../videos/BaseVideo.mp4",
          urlLegacy: "../../../videos/BaseVIdeo.webm",
        }],
  }
];

function App() {
  console.log("given from app",assets[0].assets);
  return ( 
    <div className="general-container">
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
