import React, { Fragment } from "react";
import { Label, Select } from "flowbite-react";

const SelectBox: React.FC = () => {
  return (
    <Fragment>
      <div className="w-full" id="select">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Select your country" />
        </div>
        <Select id="countries" required>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </Select>
      </div>
    </Fragment>
  );
};

export default SelectBox;
