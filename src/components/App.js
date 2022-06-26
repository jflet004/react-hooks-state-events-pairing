import video from "../data/video.js";
import React from "react";
import Header from "./Header"

function App() {
  // console.log("Here's your data:", video);
  const displayVideo = <iframe
    width="919"
    height="525"
    src={video.embedUrl}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
  />

  return (
    <div className="App">
      {displayVideo}
      <Header
        video={video}
      />
    </div>
  );
}

export default App;
