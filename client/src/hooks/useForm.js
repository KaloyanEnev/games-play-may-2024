import { useState } from "react";
export function useForm(initialValues, submitCallback) {
  const [values, setValues] = useState(initialValues);

  // TO DO - add support for check boxes
  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback(values);
console.log('git checksss');
    
  };
  return {
    values,
    changeHandler,
    submitHandler,
  };
}
