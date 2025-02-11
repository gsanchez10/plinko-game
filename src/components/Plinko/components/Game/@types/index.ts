export type LinesType = 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16

export type MultiplierValuesType =
  | 0.2
  | 0.3
  | 0.35
  | 0.8
  | 0.5
  | 1
  | 1.1
  | 1.5
  | 2
  | 3
  | 3.5
  | 5
  | 7
  | 10
  | 15
  | 18
  | 25
  | 33
  | 41
  | 75
  | 88
  | 110

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
  | 0.2
  | 0.3
  | 0.35
  | 0.8
  | 0.5
  | 1
  | 1.1
  | 1.5
  | 2
  | 3
  | 3.5
  | 5
  | 7
  | 10
  | 15
  | 18
  | 25
  | 33
  | 41
  | 75
  | 88
  | 110

type MultiplierLabelType = `block-${MultiplierValues}`

export type MultiplierType = {
  label: MultiplierLabelType
  img: string
}
