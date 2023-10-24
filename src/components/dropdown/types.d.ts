export interface TDropdown {
    dataOptions?: string[];
    placeholder: string;
    icons: React.ReactElement;
    reverse: boolean;
    textCentre: boolean;
    shadow: boolean;
    bold: boolean;
    onChange?: (value: string) => void;
  }