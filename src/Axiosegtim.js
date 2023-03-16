import React, { useState } from "react";
import SearchBar from "./component/SearchBar";
import searchImages from "./component/Api";
import { ImagesList } from "./component/ImagesList";
export default function Axiosegtim() {
  const [images, setImages] = useState([]);
  const handlSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar search={handlSubmit} />
    <ImagesList imagesplacholder={images} />
    </div>
  );
}
