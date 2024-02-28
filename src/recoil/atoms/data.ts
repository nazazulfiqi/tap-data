import { atom } from "recoil";

export const modalUploadDataOpenState = atom({
    key: 'modal-upload-data', // unique ID (with respect to other atoms/selectors)
    default: false, // nilai default
  });

  export const modalDeleteDataState = atom({
    key: 'modal-delete-data',
    default: false,
  });