import React from "react";

const Select = ({ name, label, options, error, value, ...rest }) => {
    let optionsVersion2 = [];
    if (value !== "") {
        optionsVersion2.push(value);
        options.forEach(op => {
            if (op !== value)
                optionsVersion2.push(op)
        })
    }
    else optionsVersion2 = options

    return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
          {
              value ?
                  ""
                  :
                  <option value="">Selectează...</option>
          }
          {

          }
          {optionsVersion2.map((option, index) => (
              <option key={index} value={option}>
                  {option}
              </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
};

export default Select;
