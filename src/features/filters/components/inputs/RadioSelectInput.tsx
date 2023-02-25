import React from "react";

interface IProps {
  label: string;
  selectValues: string[];
  value: {
    radio: string;
    order: string;
  };
  checked: boolean;
  onChangeRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RadioSelectInput: React.FC<IProps> = ({
  label,
  selectValues,
  value,
  onChangeRadio,
  onChangeSelect,
  checked,
}) => {
  return (
    <div className="mb-1 d-flex align-items-center form-check">
      <input
        type="radio"
        className="me-1 form-check-input"
        checked={checked}
        onChange={onChangeRadio}
        value={value.radio}
      />
      <label className="me-1">{label}</label>
      {checked ? (
        <select
          value={value.order}
          onChange={onChangeSelect}
          className="form-select"
        >
          <option value="high">{selectValues[0]}</option>
          <option value="low">{selectValues[1]}</option>
        </select>
      ) : null}
    </div>
  );
};

export default RadioSelectInput;
