import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text  text-gray-400">Male</span>
          <input
            type="checkbox"
            className="checkbox  bg-gray-800 border-gray-600"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text  text-gray-400">Female</span>
          <input
            type="checkbox"
            className="checkbox  bg-gray-800  border-gray-600"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
