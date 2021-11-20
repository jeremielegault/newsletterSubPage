import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import FormContext from "./Reducers/FormContext";

const Subscreen = (props) => {
  const {
    state: { name, company, email, checkbox },
    receiveFormInfo,
  } = useContext(FormContext);

  const [formData, setFormData] = useState({ name, company, email, checkbox });

  const noRefresh = () => {
    // e.preventDefault();
    if (document.getElementById("name").length === 0) {
      window.alert("Name is empty");
    }
    // history.push("/confirmation");
    console.log("You clicked submit.");
  };

  return (
    <div className="App">
      <h1>This is the app page!</h1>
      <form>
        <label htmlFor="Name">Name:</label>
        <Input
          label="name"
          type="text"
          name="name"
          placeholder="Name"
          value={props.inputValue}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
          id="name"
        />
        <label htmlFor="Company">Company:</label>
        <Input
          label="company"
          type="text"
          name="company"
          placeholder="Company"
          // value={props.inputValue}
          // onChange={(event) => {
          //   setFormData({ ...formData, company: props.value });
          // }}
        />
        <label htmlFor="Email">Email address:</label>
        <Input
          label="email"
          type="email"
          name="email"
          placeholder="Email"
          // value={props.inputValue}
          // onChange={(event) => {
          //   setFormData({ ...formData, email: props.value });
          // }}
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
          <Link to="/success">
            <Button
              onClick={() => {
                receiveFormInfo({
                  ...formData,
                });
                // handleSubmit(e);
                noRefresh();
              }}
            >
              Submit
            </Button>
          </Link>
          <Button>Clear/Reset</Button>
        </div>
      </form>
    </div>
  );
};

export default Subscreen;
