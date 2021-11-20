import React, { useState, useContext } from "react";
import FormContext from "./Reducers/FormContext";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  // const {
  //   state: { name, company, email, checkbox },
  //   receiveFormInfo,
  // } = useContext(FormContext);

  // const [formData, setFormData] = useState({ name, company, email, checkbox });

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return (
    <>
      <input
        type={props.type}
        // value={inputValue}
        name={props.name}
        // onChange={handleChange}
        className="inputclass"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </>
  );
}
export default Input;
