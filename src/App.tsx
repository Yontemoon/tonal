import "./App.css";
import useColors from "./hooks/useColors";
import ColorCard from "./components/color-card/color-card";

function App() {
  const {
    colors,
    toggleColorChange,
    isGenerating,
    colorList,
    setNextColor,
    setPrevColor,
    isFirst,
    isLast,
  } = useColors();

  // TODO added a next and previous button
  // TODO Add a like button that is added in local storage

  console.log(colorList);

  return (
    <div className="app-container">
      <div className="grid-container ">
        {colors?.map((color, index) => {
          return <ColorCard colors={color} key={index} />;
        })}
      </div>
      <div className="button-random">
        <button onClick={setPrevColor} disabled={isFirst}>
          Previous
        </button>
        <button onClick={setNextColor} disabled={isLast}>
          Next
        </button>
        <button onClick={toggleColorChange} disabled={isGenerating}>
          {isGenerating ? "Generating" : "Click ME"}
        </button>
      </div>
    </div>
  );
}

export default App;
