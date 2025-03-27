import React from "react";

type PropTypes = {
  onSpace: () => void;
  onLeft: () => void;
  onRight: () => void;
};

const useKeybinds = ({ onSpace, onLeft, onRight }: PropTypes) => {
  React.useEffect(() => {
    const handleKeyEvents = (event: KeyboardEvent) => {
      switch (event.key) {
        case " ":
          onSpace();
          break;
        case "ArrowLeft":
          onLeft();
          break;

        case "ArrowRight":
          onRight();
      }
    };

    window.addEventListener("keydown", handleKeyEvents);
    return () => window.removeEventListener("keydown", handleKeyEvents);
  }, [onLeft, onRight, onSpace]);
};

export default useKeybinds;
