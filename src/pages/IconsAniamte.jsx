import React, { useState } from "react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

const App = () => {
  // State to control the animation progress
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <button
        onClick={handleToggle}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UseAnimations
          animation={menu2} // Animation object
          size={56}         // Size of the icon
          reverse={isToggled} // Reverse the animation on click
          strokeColor="blue" // Color of the animation
        />
      </button>
    </div>
  );
};

export default App;
