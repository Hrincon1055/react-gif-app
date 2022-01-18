import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  // const categories = ["One Punch", "Samurai x", "Dreagon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   setCategories((cats) => ["Superman", ...categories]);
  // };
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
