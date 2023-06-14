type Hex =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";
type ShortHexColor = `#${Hex}${Hex}${Hex}`;
type HexColor = `#${Hex}${Hex}${Hex}${Hex}${Hex}${Hex}`;
