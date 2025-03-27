import "./color-card.css";
import { TFormatColors } from "@customType/index";

type PropTypes = {
  colors: TFormatColors;
};

const ColorCard = ({ colors }: PropTypes) => {
  const styledBackgroundColor = `rgb(${colors.background[0]}, ${colors.background[1]}, ${colors.background[2]})`;
  const styledTextColor = `rgb(${colors.text[0]}, ${colors.text[1]}, ${colors.text[2]})`;

  return (
    <div
      className="card-container"
      style={{
        background: styledBackgroundColor,
        color: styledTextColor,
      }}
    >
      #{colors.background[0]}, {colors.background[1]}, {colors.background[2]}
    </div>
  );
};

export default ColorCard;
