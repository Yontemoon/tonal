import React from "react";
import { TFormatColors } from "../lib/types";

const useColors = () => {
  const [colors, setColors] = React.useState<TFormatColors[] | null>(null);
  const [isGenerating, setIsGenerating] = React.useState<boolean>(false);

  const toggleColorChange = React.useCallback(async () => {
    try {
      setIsGenerating(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/colors`);
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  React.useEffect(() => {
    toggleColorChange();
  }, [toggleColorChange]);

  return {
    colors,
    toggleColorChange,
    isGenerating,
  };
};

export default useColors;
