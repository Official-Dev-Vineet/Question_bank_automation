/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/FormInput.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="input-field flex flex-col mt">
      <label htmlFor={id} className="margin-sm t-bold letter-spacing">
        {label}
      </label>
      <input
        className="padding-sm radius-2 shadow-3d-light"
        id={id}
        {...inputProps}
        onChange={onChange}
        autoComplete="on"
        onBlur={handleFocus}
        onFocus={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span className="t-danger mt mb">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};
