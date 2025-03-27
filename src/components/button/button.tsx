import './button.css'
import React, { ComponentProps } from 'react'
import { TFormatColors } from '@customType/index'

type PropTypes = {
  children: React.ReactNode
  colors: TFormatColors
} & ComponentProps<'button'>

const Button = ({ children, colors, ...props }: PropTypes) => {
  const styledBackgroundColor = `rgb(${colors.background[0]}, ${colors.background[1]}, ${colors.background[2]})`
  const styledTextColor = `rgb(${colors.text[0]}, ${colors.text[1]}, ${colors.text[2]})`
  return (
    <button
      className="button-container"
      {...props}
      style={{
        backgroundColor: styledBackgroundColor,
        color: styledTextColor,
      }}>
      {children}
    </button>
  )
}

export default Button
