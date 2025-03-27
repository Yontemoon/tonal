import React from "react";
import { TFormatColors } from "@customType/index";

const useColors = () => {
  const [colors, setColors] = React.useState<TFormatColors[] | null>(null);
  const [isGenerating, setIsGenerating] = React.useState<boolean>(false);
  const [colorList, setColorList] = React.useState<TFormatColors[][]>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(-1);

  const toggleColorChange = React.useCallback(async () => {
    try {
      setIsGenerating(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/colors`);
      const data = (await response.json()) as TFormatColors[];

      setColorList((prev) => [...prev, data]);
      setCurrentIndex((prev) => prev + 1);
      setColors(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const setPrevColor = React.useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        setColors(colorList[prev - 1]);
        return prev - 1;
      }
      return prev;
    });
  }, [colorList]);

  const setNextColor = React.useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < colorList.length - 1) {
        setColors(colorList[prev + 1]);
        return prev + 1;
      }
      return prev;
    });
  }, [colorList]);

  const isFirst = currentIndex === 0;

  const isLast = currentIndex === colorList.length - 1;

  React.useEffect(() => {
    toggleColorChange();
  }, [toggleColorChange]);

  return {
    colorList,
    colors,
    toggleColorChange,
    isGenerating,
    setPrevColor,
    setNextColor,
    currentIndex,
    isFirst,
    isLast,
  };
};

export default useColors;
