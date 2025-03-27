import "./App.css";
import useColors from "./hooks/useColors";
import useLocalColors from "./hooks/useLocalColor";
import useKeybinds from "./hooks/useKeybinds";
import ColorCard from "./components/color-card/color-card";

function App() {
  const {
    colors,
    toggleColorChange,
    isGenerating,
    // colorList,
    setNextColor,
    setPrevColor,
    isFirst,
    isLast,
  } = useColors();

  const [storage, addStorage] = useLocalColors();
  useKeybinds();

  return (
    <div className="app-container">
      <div className="grid-container ">
        {colors?.map((color, index) => {
          return <ColorCard colors={color} key={index} />;
        })}
      </div>
      <div className="button-random">
        <button
          disabled={storage?.find((s) => s === colors) ? true : false}
          onClick={() => {
            if (colors) {
              addStorage(colors);
            }
          }}
        >
          Like
        </button>
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
