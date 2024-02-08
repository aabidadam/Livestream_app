import React, { useState } from 'react';


function Overlaytext() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOverlay = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="overlay-container">
      <button onClick={toggleOverlay}>Toggle Overlay</button>
      {isVisible && (
        <div className="overlay">
          <h2>This is an overlay!</h2>
          <p>You can add any content you want here.</p>
          <button onClick={toggleOverlay}>Close Overlay</button>
        </div>
      )}
    </div>
  );
}

export default Overlaytext;

