export type LinesType = 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16

export type MultiplierValuesType =
  | 90
  | 88
  | 35
  | 33
  | 18
  | 15
  | 9
  | 8
  | 4.5
  | 2.8
  | 2
  | 1.3
  | 1
  | 0.45
  | 0.25

export enum MultiplierColors {
  RED_DARKER = '#ff003f',
  RED_DARK = '#ff1837',
  RED = '#ff302f',
  ORANGE_DARK = '#ff4827',
  ORANGE = '#ff6020',
  ORANGE_LIGHT = '#ff7818',
  YELLOW_DARK = '#ff9010',
  YELLOW = '#ffa818',
  YELLOW_LIGHT = '#ffc000'
}

export type MultiplierValues =
  | 90
  | 88
  | 35
  | 33
  | 25
  | 18
  | 15
  | 9
  | 4.5
  | 2.8
  | 2
  | 1.3
  | 1
  | 0.45
  | 0.25

type MultiplierLabelType = `block-${MultiplierValues}`

export type MultiplierType = {
  label: MultiplierLabelType
  img: string
}
