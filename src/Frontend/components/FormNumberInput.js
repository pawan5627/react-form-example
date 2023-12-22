import React from 'react';
import  NumberInput  from 'semantic-ui-react-numberinput';
import 'semantic-ui-css/semantic.min.css';
import '../styles/FormStyle.css'; // Import your custom CSS file

const FormNumberInput = ({ label, name, value, onChange, error }) => {
  if(value =='')
    value='0';
  return (
    <div className="mb-3 .digit-section">
      <label htmlFor={name} className="form-label">
        {label}:
      </label>
      <NumberInput
        className={`form-control ${error ? 'is-invalid' : ''} `}
        name={name}
        value={value}
        onChange={onChange}
        min={0}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormNumberInput;
