import { atom } from "recoil";

export const modalUploadDataOpenState = atom({
    key: 'modal-upload-data', // unique ID (with respect to other atoms/selectors)
    default: false, // nilai default
  });