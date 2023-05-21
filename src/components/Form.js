import React, { useState } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log("inside if loop");
      setError("password do not match");
      return;
    }

    setFormData(initialState);
  };

  const handleChange = (event) => {
    console.log("event", event.target);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  console.log("formData", formData);
  return (
    <div>
      <h1>SignUp form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name"> Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="email"> Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="password"> Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="confrmPassword"> Confrim Password :</label>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Form;
