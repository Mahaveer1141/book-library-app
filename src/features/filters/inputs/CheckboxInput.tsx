import React from "react";

interface IProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

const CheckboxInput: React.FC<IProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <input
        className="me-1 form-check-input"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default CheckboxInput;
