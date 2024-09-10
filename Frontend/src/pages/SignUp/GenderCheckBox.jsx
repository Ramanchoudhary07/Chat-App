import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text  text-gray-400">Male</span>
          <input
            type="checkbox"
            className="checkbox  bg-gray-800 border-gray-600"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckBoxChange("male");
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text  text-gray-400">Female</span>
          <input
            type="checkbox"
            className="checkbox  bg-gray-800  border-gray-600"
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckBoxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
