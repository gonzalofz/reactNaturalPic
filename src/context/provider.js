import React, { createContext, useState } from "react";
import dataPhotos from "./data/photos.json";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState(dataPhotos);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const valueContextProvider = {
    photos,
    setPhotos,
    favoritePhotos,
    setFavoritePhotos,
  };

  return (
    <DataContext.Provider value={valueContextProvider}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
