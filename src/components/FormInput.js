import React from "react";

const FormInput = ({
  value,
  touched,
  error,
  handleChange,
  handleBlur,
  name,
  label,
  type = "text",
}) => {
  return (
    <div className="mb-4 ">
      <label
        htmlFor={name}
        className={`form-label ${(touched && error) ? "text-danger" : (touched === undefined) ? "" : "text-success"} `}
      >
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${(touched && error) ? "border-danger" : (touched === undefined) ? "" : "border-success" } `}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      { !error && touched !== undefined && <div className="text-success">Looks good!</div>}
      {touched && error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default FormInput;
