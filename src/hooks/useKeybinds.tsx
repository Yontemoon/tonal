import React from "react";

const useKeybinds = () => {
  React.useEffect(() => {
    const handleKeyEvents = (event: KeyboardEvent) => {
      console.log(event.key);
      if (event.key === " ") {
        console.log("hello world");
      }
    };

    window.addEventListener("keydown", handleKeyEvents);
    return () => window.removeEventListener("keydown", handleKeyEvents);
  }, []);
};

export default useKeybinds;
