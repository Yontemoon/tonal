import './liked-dialog.css'
import { TFormatColors } from '@customType/index'
import React from 'react'

type PropTypes = {
  closed: () => void
  likes: TFormatColors[][]
} & React.ComponentProps<'dialog'>

const LikedDialog = ({ closed, likes, ...props }: PropTypes) => {
  return (
    <dialog {...props} className="dialog-container">
      <div className="colors-container">
        {likes.map((colors, i) => {
          return (
            <div key={i}>
              <div className="color-component">
                {colors.map((color) => {
                  const styledBackgroundColor = `rgb(${color.background[0]}, ${color.background[1]}, ${color.background[2]})`
                  return (
                    <div key={styledBackgroundColor}>
                      <div
                        className="color"
                        style={{
                          backgroundColor: styledBackgroundColor,
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={closed}>Close</button>
    </dialog>
  )
}

export default LikedDialog
