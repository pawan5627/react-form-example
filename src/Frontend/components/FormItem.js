// FormItem.js
import React from 'react';

const FormItem = ({ label, name, value, onChange, type = 'text', error}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}:
      </label>
      <input
        required 
        type={type}
        className={`form-control`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}*`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormItem;

