import './App.css'
import React, { useEffect } from 'react'
import useColors from './hooks/useColors'
import useLocalColors from './hooks/useLocalColor'
import useKeybinds from './hooks/useKeybinds'
import ColorCard from './components/color-card/color-card'
import Button from './components/button/button'
import { TColor } from '@customType/index'
import useDialog from './hooks/useDialog'
import LikeDialog from './components/liked-dialog/liked-dialog'

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
  } = useColors()

  const [storage, addStorage] = useLocalColors()
  const [colorsShown, setColorsShown] = React.useState(5)
  const [filteredColors, setFilteredColors] = React.useState(colors)
  const { openDialog, closeDialog, dialogRef } = useDialog()

  useEffect(() => {
    const slicedColors = colors?.slice(0, colorsShown)
    if (slicedColors) {
      setFilteredColors(slicedColors)
    }
  }, [colors, colorsShown])

  useKeybinds({
    onSpace: () => {
      toggleColorChange()
    },
    onLeft: () => {
      setPrevColor()
    },
    onRight: () => {
      setNextColor()
    },
  })

  const buttonInfo = colors
    ? colors[1]
    : {
        background: [235, 198, 126] as TColor,
        text: [235, 198, 126] as TColor,
      }

  return (
    <div className="app-container">
      <div
        className="grid-container"
        style={{
          gridTemplateRows: `repeat(${colorsShown}, minmax(0, 1fr))`,
        }}>
        {filteredColors?.map((color, index) => {
          return <ColorCard colors={color} key={index} />
        })}
      </div>
      <div className="top-navigator">
        <Button
          disabled={storage?.find((s) => s === colors) ? true : false}
          colors={buttonInfo}
          onClick={() => {
            if (colors) {
              addStorage(colors)
            }
          }}>
          Like
        </Button>
        <Button colors={buttonInfo} onClick={openDialog}>
          Show Likes
        </Button>
        <Button colors={buttonInfo} onClick={() => setColorsShown(2)}>
          2
        </Button>
        <Button colors={buttonInfo} onClick={() => setColorsShown(3)}>
          3
        </Button>
        <Button colors={buttonInfo} onClick={() => setColorsShown(4)}>
          4
        </Button>
        <Button colors={buttonInfo} onClick={() => setColorsShown(5)}>
          5
        </Button>

        <Button
          onClick={toggleColorChange}
          disabled={isGenerating}
          colors={buttonInfo}
          className="generate-button button-container">
          {isGenerating ? 'Generating' : 'Generate'}
        </Button>
      </div>
      <div className="buttom-navigator">
        <Button onClick={setPrevColor} disabled={isFirst} colors={buttonInfo}>
          Previous
        </Button>
        <Button onClick={setNextColor} disabled={isLast} colors={buttonInfo}>
          Next
        </Button>
      </div>
      {storage && (
        <LikeDialog ref={dialogRef} closed={closeDialog} likes={storage} />
      )}
    </div>
  )
}

export default App
