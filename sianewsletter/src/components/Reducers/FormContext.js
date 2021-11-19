import React from "react";

export const FormContext = React.createContext();

const initialState = {
  name: "",
  company: "",
  email: "",
  checkbox: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "receive-form-info": {
      return {
        ...state,
        name: action.name,
        company: action.company,
        email: action.email,
        checkbox: action.checkbox,
      };
    }

    default:
      throw new Error(`unrecognized action: ${action.type}`);
  }
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const receiveFormInfo = (data) => {
    dispatch({
      type: "receive-form-info",
      ...data,
    });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        receiveFormInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
