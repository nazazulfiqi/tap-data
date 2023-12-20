import { atom } from "recoil";

export const modalCreateDescriptionOpenState = atom({
    key: 'modal-create-description',
    default: false,
  });

  export const modalDeleteDescriptionOpenState = atom({
    key: 'modal-delete-description',
    default: false,
  });

  export const modalEditDescriptionOpenState = atom({
    key: 'modal-edit-description',
    default: false,
  });