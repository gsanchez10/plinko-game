/* eslint-disable import/no-absolute-path */
// multiplierImages
import { LinesType, MultiplierType, MultiplierValues } from '../@types'

const multiplierBest = '/assets/sounds/multiplier-best.wav'
const multiplierGood = '/assets/sounds/multiplier-good.wav'
const multiplierLow = '/assets/sounds/multiplier-low.wav'
const multiplierRegular = '/assets/sounds/multiplier-regular.wav'

const multiplier0dot25Img = '/assets/img/multipliers/multiplier-0.25.svg'
const multiplier0dot45Img = '/assets/img/multipliers/multiplier-0.45.svg'
const multiplier1dot3Img = '/assets/img/multipliers/multiplier-1.3.svg'
const multiplier1Img = '/assets/img/multipliers/multiplier-1.svg'
const multiplier2Img = '/assets/img/multipliers/multiplier-2.svg'
const multiplier9Img = '/assets/img/multipliers/multiplier-9.svg'
const multiplier90Img = '/assets/img/multipliers/multiplier-90.svg'
const multiplier15Img = '/assets/img/multipliers/multiplier-15.svg'
const multiplier18Img = '/assets/img/multipliers/multiplier-18.svg'
const multiplier2dot8Img = '/assets/img/multipliers/multiplier-2.8.svg'
const multiplier25Img = '/assets/img/multipliers/multiplier-25.svg'
const multiplier4dot5Img = '/assets/img/multipliers/multiplier-4.5.svg'
const multiplier33Img = '/assets/img/multipliers/multiplier-33.svg'
const multiplier35Img = '/assets/img/multipliers/multiplier-35.svg'
const multiplier88Img = '/assets/img/multipliers/multiplier-88.svg'

// multiplierSoundEffects
const multiplierSounds = {
  90: multiplierBest,
  88: multiplierBest,
  35: multiplierBest,
  33: multiplierBest,
  25: multiplierBest,
  18: multiplierGood,
  15: multiplierGood,
  9: multiplierGood,
  4.5: multiplierGood,
  2.8: multiplierRegular,
  2: multiplierRegular,
  1.3: multiplierRegular,
  1: multiplierRegular,
  0.45: multiplierLow,
  0.25: multiplierLow
} as const

const multipliers = {
  90: {
    label: 'block-90',
    sound: multiplierBest,
    img: multiplier90Img
  },
  88: {
    label: 'block-88',
    sound: multiplierBest,
    img: multiplier88Img
  },
  35: {
    label: 'block-35',
    sound: multiplierBest,
    img: multiplier35Img
  },
  33: {
    label: 'block-33',
    sound: multiplierBest,
    img: multiplier33Img
  },
  25: {
    label: 'block-25',
    sound: multiplierBest,
    img: multiplier25Img
  },
  18: {
    label: 'block-18',
    sound: multiplierGood,
    img: multiplier18Img
  },
  15: {
    label: 'block-15',
    sound: multiplierGood,
    img: multiplier15Img
  },
  9: {
    label: 'block-9',
    sound: multiplierGood,
    img: multiplier9Img
  },
  4.5: {
    label: 'block-4.5',
    sound: multiplierGood,
    img: multiplier4dot5Img
  },
  2.8: {
    label: 'block-2.8',
    sound: multiplierRegular,
    img: multiplier2dot8Img
  },
  2: {
    label: 'block-2',
    sound: multiplierRegular,
    img: multiplier2Img
  },
  1.3: {
    label: 'block-1.3',
    sound: multiplierRegular,
    img: multiplier1dot3Img
  },
  1: {
    label: 'block-1',
    sound: multiplierRegular,
    img: multiplier1Img
  },
  0.45: {
    label: 'block-0.45',
    sound: multiplierLow,
    img: multiplier0dot45Img
  },
  0.25: {
    label: 'block-0.25',
    sound: multiplierLow,
    img: multiplier0dot25Img
  }
} as const

export type MultipliersType = keyof typeof multipliers

export function getMultiplier(value: MultipliersType): MultiplierType {
  return multipliers[value]
}

export const multiplyBlocks16Lines = [
  getMultiplier(90),
  getMultiplier(35),
  getMultiplier(9),
  getMultiplier(4.5),
  getMultiplier(2.8),
  getMultiplier(1.3),
  getMultiplier(1),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1),
  getMultiplier(1.3),
  getMultiplier(2.8),
  getMultiplier(4.5),
  getMultiplier(9),
  getMultiplier(35),
  getMultiplier(90)
]

export const multiplyBlocks15Lines = [
  getMultiplier(88),
  getMultiplier(18),
  getMultiplier(9),
  getMultiplier(4.5),
  getMultiplier(2.8),
  getMultiplier(1.3),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1.3),
  getMultiplier(2.8),
  getMultiplier(4.5),
  getMultiplier(9),
  getMultiplier(18),
  getMultiplier(88)
]
export const multiplyBlocks14Lines = [
  getMultiplier(35),
  getMultiplier(15),
  getMultiplier(4.5),
  getMultiplier(2.8),
  getMultiplier(1.3),
  getMultiplier(1),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1),
  getMultiplier(1.3),
  getMultiplier(2.8),
  getMultiplier(4.5),
  getMultiplier(15),
  getMultiplier(35)
]
export const multiplyBlocks13Lines = [
  getMultiplier(35),
  getMultiplier(15),
  getMultiplier(4.5),
  getMultiplier(2.8),
  getMultiplier(1.3),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1.3),
  getMultiplier(2.8),
  getMultiplier(4.5),
  getMultiplier(15),
  getMultiplier(35)
]
export const multiplyBlocks12Lines = [
  getMultiplier(33),
  getMultiplier(9),
  getMultiplier(2.8),
  getMultiplier(2),
  getMultiplier(1.3),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1.3),
  getMultiplier(2),
  getMultiplier(2.8),
  getMultiplier(9),
  getMultiplier(33)
]
export const multiplyBlocks11Lines = [
  getMultiplier(25),
  getMultiplier(4.5),
  getMultiplier(2.8),
  getMultiplier(2),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(2),
  getMultiplier(2.8),
  getMultiplier(4.5),
  getMultiplier(25)
]
export const multiplyBlocks10Lines = [
  getMultiplier(25),
  getMultiplier(4.5),
  getMultiplier(2),
  getMultiplier(1.3),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1.3),
  getMultiplier(2),
  getMultiplier(4.5),
  getMultiplier(25)
]
export const multiplyBlocks9Lines = [
  getMultiplier(9),
  getMultiplier(4.5),
  getMultiplier(2),
  getMultiplier(1.3),
  getMultiplier(0.25),
  getMultiplier(0.25),
  getMultiplier(1.3),
  getMultiplier(2),
  getMultiplier(4.5),
  getMultiplier(9)
]
export const multiplyBlocks8Lines = [
  getMultiplier(4.5),
  getMultiplier(2.8),
  getMultiplier(1.3),
  getMultiplier(0.45),
  getMultiplier(0.25),
  getMultiplier(0.45),
  getMultiplier(1.3),
  getMultiplier(2.8),
  getMultiplier(4.5)
]

export const multiplyBlocksByLinesQnt = {
  8: multiplyBlocks8Lines,
  9: multiplyBlocks9Lines,
  10: multiplyBlocks10Lines,
  11: multiplyBlocks11Lines,
  12: multiplyBlocks12Lines,
  13: multiplyBlocks13Lines,
  14: multiplyBlocks14Lines,
  15: multiplyBlocks15Lines,
  16: multiplyBlocks16Lines
}

export function getMultiplierByLinesQnt(value: LinesType): MultiplierType[] {
  return multiplyBlocksByLinesQnt[value]
}

export function getMultiplierSound(value: MultiplierValues): string {
  return multiplierSounds[value]
}
