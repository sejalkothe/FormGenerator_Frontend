import React from "react";
import { useState, useEffect } from "react";

const Phone = (props) => {
  const [label, setLabel] = useState("Phone");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    const field = {
      id: `Phone_${props.id}`,
      type: "Phone",
      label: label,
    };
    props.addFormConfiguration(field);
  });

  return (
    <div className="element-name">
      <input
        className="element-input element-gap element-border-style"
        value={label}
        placeholder="Phone Number"
        onChange={handleLabelChange}
      />
      <input
        type={"tel"}
        className="element-input min-width-input element-border-style"
        placeholder="9999999999"
        pattern="[0-9]{10}"
        required
        // onChange={handleLabelChange}
      />
    </div>
  );
};

export default Phone;
