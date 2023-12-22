// FormItem.js
import React from 'react';

const FormCheckBox = ({ label, name, value, onChange, type = "checkbox", error}) => {
  return (
    <div className="mb-3 form-check">
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>
      <input 
        type={type}
        className={`form-check-input`}
        id={name}
        name={name}
        checked={value}
        onChange={onChange}
        
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormCheckBox;
