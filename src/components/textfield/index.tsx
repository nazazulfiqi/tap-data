import React, { Fragment } from "react";
import { Label, TextInput } from "flowbite-react";
import { TextFieldProps } from "./types";

const TextFieldNormal: React.FC<TextFieldProps> = ({ prop, name }) => {
  return (
    <Fragment>
      <div className={`${prop} items-center`}>
        <div className="mb-2 w-1/2">
          <Label htmlFor="base" value={`${name}`} />
        </div>
        <TextInput id="base" sizing="sm" type="text" className="w-full" />
      </div>
    </Fragment>
  );
};

export default TextFieldNormal;
