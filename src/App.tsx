import "./App.css";
import useColors from "./hooks/useColors";
import ColorCard from "./components/color-card/color-card";

function App() {
  const { colors, toggleColorChange, isGenerating } = useColors();

  return (
    <div className="app-container">
      <div className="grid-container ">
        {colors?.map((color, index) => {
          return <ColorCard colors={color} key={index} />;
        })}
      </div>
      <div className="button-random">
        <button onClick={toggleColorChange} disabled={isGenerating}>
          {isGenerating ? "Generating" : "Click ME"}
        </button>
      </div>
    </div>
  );
}

export default App;
