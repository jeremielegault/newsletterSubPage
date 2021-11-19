import React, { useState, useContext } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import FormContext from "./components/Reducers/FormContext";

function App() {
  const {
    state: { name, company, email, checkbox },
    receiveFormInfo,
  } = useContext(FormContext);

  const [formData, setFormData] = useState({ name, company, email, checkbox });

  return (
    <div className="App">
      <h1>This is the app page!</h1>
      <form>
        <div className="formElements">
          <h4>Name:</h4>
          <Input
            type="text"
            name="txtName"
            placeholder="Name"
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value });
            }}
          />
        </div>
        <Input
          type="text"
          name="txtCompany"
          placeholder="Company"
          onChange={(event) => {
            setFormData({ ...formData, company: event.target.value });
          }}
        />
        <Input
          type="email"
          name="txtEmail"
          placeholder="Email"
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={(event) => {
              setFormData({ ...formData, checkbox: true });
            }}
          />
          <p>Subscribe to newsletter</p>
        </div>
        <div className="buttons">
          <Button
            onClick={(e) => {
              receiveFormInfo({
                ...formData,
              });
            }}
          >
            Submit
          </Button>
          <Button>Clear/Reset</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
