import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import { dropdownData } from "./constant";
import IconArrow from "../../../../components/icons/ic-arrow-down";

const MenuDropdown: FC = () => {
  const [active, setActive] = useState<string>("Tahun");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center items-center rounded-md border-2 bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <p className="text-black mr-2">{active}</p>
        <IconArrow/>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {dropdownData.map((item) => (
            <Menu.Item as={Fragment} key={item.id}>
              <button
                className="group flex items-center w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
