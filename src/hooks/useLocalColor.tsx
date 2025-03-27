import React from "react";
import { TFormatColors } from "../lib/types";

const useLocalColors = () => {
  const [storage, setStorage] = React.useState<TFormatColors[][] | null>(() => {
    try {
      const localItems = window.localStorage.getItem("colors");
      return localItems ? JSON.parse(localItems) : null;
    } catch (error) {
      console.error("Error occurred", error);
      return null;
    }
  });

  const addStorage = (color: TFormatColors[]) => {
    const isDuplicate = storage?.find((c) => c === color);
    if (isDuplicate) {
      return;
    }

    const currentStorage = storage || [];
    const addedStorage = [...currentStorage, color];
    localStorage.setItem("colors", JSON.stringify(addedStorage));
    setStorage(addedStorage);
  };

  // TODO - Added once dialog is created.
  const removeStorage = (color: TFormatColors[]) => {
    if (!storage) {
      return;
    }
    const filteredList = storage.filter((item) => item !== color);
    window.localStorage.setItem("colors", JSON.stringify(filteredList));
    setStorage(filteredList);
  };

  React.useEffect(() => {
    const changeStorageState = (e: StorageEvent) => {
      console.log("passing");
      if (e.newValue) {
        setStorage(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", changeStorageState);
    return () => window.removeEventListener("storage", changeStorageState);
  }, [storage]);

  return [storage, addStorage, removeStorage] as const;
};

export default useLocalColors;
