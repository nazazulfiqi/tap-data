// import React, { DependencyList, useCallback, useEffect } from "react";
// import { Button } from "@/src/components/button/button";
// import TextFieldNormal from "@/src/components/textfield";
// import SelectBox from "../../../components/selectbox";

// export function useDebounce(
//   effect: VoidFunction,
//   dependencies: DependencyList,
//   delay: number
// ): void {
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const callback = useCallback(effect, dependencies);

//   useEffect(() => {
//     const timeout = setTimeout(callback, delay);
//     return () => clearTimeout(timeout);
//   }, [callback, delay]);
// }



// const ContentSection: React.FC = () => {

  
//   return (
//     <section className="w-full mt-4 px-8">
//       <main className="">
//         <div className="flex flex-col gap-4">
//           <div className="w-full">
//             <TextFieldNormal name="KEYWORD" prop="block" desc="Note: The user can search on Regional, Division Description, Position Description, Status Plan Fulfillment" widthInput="w-full"/>
//           </div>
//           <div className="flex space-x-4">
//             <SelectBox />
//             <SelectBox />
//             <SelectBox />
//           </div>
//           <div className="flex space-x-4">
//             <SelectBox />
//             <SelectBox />
//             <SelectBox />
//           </div>
//           <div className="flex space-x-4">
//             <SelectBox />
//             <SelectBox />
//             <SelectBox />
//           </div>
//         </div>
//         <div className="flex mt-5 gap-x-4 justify-end">
//           <Button type="button" className="bg-[#D9D9D9] text-black px-6 border-2 border-black font-bold">
//             SEARCH
//           </Button>
//           <Button type="button"  className="bg-[#D9D9D9] text-black px-6 border-2 border-black font-bold">
//             CLEAR
//           </Button>
//         </div>
//       </main>
//     </section>
//   );
// };

// export default ContentSection;
