import React, { Fragment } from "react";
import { Label, TextInput } from "flowbite-react";
import { TextFieldProps } from "./types";

const TextFieldNormal: React.FC<TextFieldProps> = ({ prop, name, desc, widthInput, value,  onChange }) => {
  return (
    <Fragment>
      <div className={`${prop} items-center`}>
        <div className={`${widthInput} mb-2 block`}>
          <Label htmlFor="base" value={`${name}`} />
          <p className="text-[12px]">{desc ? desc : ""}</p>
        </div>
        <TextInput id="base" sizing="sm" type="text" className="w-full border-2 border-black rounded-lg focus:border-none" value={value} onChange={onChange} />
      </div>
    </Fragment>
  );
};

export default TextFieldNormal;
