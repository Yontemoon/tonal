import React from "react";
import { COLOR_URL } from "../lib/constants";
import { TColors, TFormatColors } from "../lib/types";

const useColors = () => {
  const [colors, setColors] = React.useState<TFormatColors[] | null>(null);

  const toggleColorChange = React.useCallback(async () => {
    const response = await fetch(COLOR_URL, {
      method: "POST",
      body: JSON.stringify({
        model: "default",
      }),
    });
    const data: TColors = await response.json();

    const formattedColors = [] as TFormatColors[];

    const allColors = data.result;
    allColors.forEach((color, index) => {
      if (index === 0) {
        formattedColors.push({
          background: color,
          text: allColors[1],
        });
      } else {
        formattedColors.push({
          background: color,
          text: allColors[0],
        });
      }
    });
    setColors(formattedColors);
  }, []);

  React.useEffect(() => {
    toggleColorChange();
  }, []);

  return {
    colors,
    toggleColorChange,
  };
};

export default useColors;
