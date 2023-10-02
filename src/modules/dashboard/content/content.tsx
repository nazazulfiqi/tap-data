import React from "react";
import { Button } from "@/src/components/button/button";
import TextFieldNormal from "@/src/components/textfield";
import SelectBox from "../../../components/selectbox";



const ContentSection: React.FC = () => {
  return (
    <section className="w-full mt-4 px-8">
      <main className="">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <TextFieldNormal name="search" prop="block"/>
          </div>
          <div className="flex space-x-4">
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </div>
          <div className="flex space-x-4">
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </div>
          <div className="flex space-x-4">
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </div>
        </div>
        <div className="flex mt-5 gap-x-4 justify-end">
          <Button type="button" className="bg-[#D9D9D9] text-black px-6 border-2 border-black font-bold">
            SEARCH
          </Button>
          <Button type="button"  className="bg-[#D9D9D9] text-black px-6 border-2 border-black font-bold">
            CLEAR
          </Button>
        </div>
      </main>
    </section>
  );
};

export default ContentSection;
