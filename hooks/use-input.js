import { useState } from "react";

const useInput = (validation) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validation(value);
  const hasError = !isValid && touched;

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleTouch = (event) => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    handleInputChange,
    handleTouch,
    reset,
  };
};

export default useInput;
