export interface Shade {
  grade: number;
  hexValue: string;
  modifier: number;
}

export interface Swatch {
  name: string;
  keyHexColors: string[];
  shades: Shade[];
}
