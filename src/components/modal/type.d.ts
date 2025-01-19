import { MouseEventHandler } from 'react';

export type TModalProps = {
  title?: string;
  children: ReactNode;
  button?: ReactNode;
  hasButton?: boolean;
  hasImage?: boolean;
  lookup: boolean;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
  withClose?: boolean;
  
};

export type TPopupModalProps = {
  id?: string;
  popupTitle?: string;
  description?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
  icon?: StaticImageData;
  image?: StaticImageData;
  lookup?: boolean;
  children?: ReactNode;
  className?: string;
  hasImg?: boolean;
  stylePopup?: string;
  widthModal?: string;
  hasButton?: boolean;
};
