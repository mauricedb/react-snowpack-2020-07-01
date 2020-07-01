import React, { ChangeEventHandler } from "react";

type TextInputProps = {
  label: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
