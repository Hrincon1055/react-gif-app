import React, { useState } from "react";
import PropTypes from "prop-types";
// Inicio
export default function AddCategory(props) {
  // props
  const { setCategories } = props;
  // state
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((prevCategories) => [inputValue, ...prevCategories]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Shared"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
