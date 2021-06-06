import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {

    return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
          <option value="">Selectează...</option>
          {options.map((option, index) => (
              <option key={index} value={option}>
                  {option}
              </option>
          ))}
      </select>
      {error && <div className="alert alert-invalid">{error}</div>}
    </div>
    );
};

export default Select;
