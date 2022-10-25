import React, { useEffect, useState } from "react";
import Search from "../src/components/Search";
import { unsplash } from "./api/unsplash";
import ImageList from "./components/ImageList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("eden");
  const [images, setImages] = useState([]);

  const getSearchTerm = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await unsplash.get(`/search/photos/?query=${searchTerm}`);
      if (searchTerm.trim() !== "") {
        setImages(result.data.results);
        console.log(result);
      }
    };

    fetchPhotos();
  }, [searchTerm]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await unsplash.get("/photos/random?count=30");
      setImages(result.data);
      console.log(result);
    };

    fetchPhotos();
  }, []);
  return (
    <div>
      <Search getSearchTerm={getSearchTerm} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
