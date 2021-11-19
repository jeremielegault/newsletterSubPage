import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import FormContext from "./Reducers/FormContext";

const Subscreen = () => {
  const {
    state: { name, company, email, checkbox },
    receiveFormInfo,
  } = useContext(FormContext);

  const [formData, setFormData] = useState({ name, company, email, checkbox });

  const noRefresh = (e) => {
    e.preventDefault();
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
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
        />
        <label htmlFor="Company">Company:</label>
        <Input
          label="company"
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={(event) => {
            setFormData({ ...formData, company: event.target.value });
          }}
        />
        <label htmlFor="Email">Email address:</label>
        <Input
          label="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
          <Link to="/success">
            <Button
              onClick={() => {
                receiveFormInfo({
                  ...formData,
                });
                // handleSubmit(e);
                // noRefresh();
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
