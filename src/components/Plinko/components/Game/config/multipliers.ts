/* eslint-disable import/no-absolute-path */
// multiplierImages
import { LinesType, MultiplierType, MultiplierValues } from '../@types'

const multiplierBest = '/assets/sounds/multiplier-best.wav'
const multiplierGood = '/assets/sounds/multiplier-good.wav'
const multiplierLow = '/assets/sounds/multiplier-low.wav'
const multiplierRegular = '/assets/sounds/multiplier-regular.wav'

const multiplier0dot2Img = '/assets/img/multipliers/multiplier-0.2.svg'
const multiplier0dot35Img = '/assets/img/multipliers/multiplier-0.35.svg'
const multiplier0dot8Img = '/assets/img/multipliers/multiplier-0.8.svg'
const multiplier1dot1Img = '/assets/img/multipliers/multiplier-1.1.svg'
const multiplier2Img = '/assets/img/multipliers/multiplier-2.svg'
const multiplier3dot5Img = '/assets/img/multipliers/multiplier-3.5.svg'
const multiplier7Img = '/assets/img/multipliers/multiplier-7.svg'
const multiplier25Img = '/assets/img/multipliers/multiplier-25.svg'
const multiplier75Img = '/assets/img/multipliers/multiplier-75.svg'
const multiplier64Img = '/assets/img/multipliers/multiplier-64.svg'
const multiplier33Img = '/assets/img/multipliers/multiplier-33.svg'
const multiplier18Img = '/assets/img/multipliers/multiplier-18.svg'
const multiplier15Img = '/assets/img/multipliers/multiplier-15.svg'

const multiplierSounds = {
  75: multiplierBest,
  64: multiplierBest,
  35: multiplierBest,
  33: multiplierBest,
  25: multiplierBest,
  18: multiplierGood,
  15: multiplierGood,
  7: multiplierGood,
  3.5: multiplierGood,
  2: multiplierRegular,
  1.1: multiplierRegular,
  0.8: multiplierRegular,
  0.35: multiplierLow,
  0.2: multiplierLow
} as const

const multipliers = {
  75: {
    label: 'block-75',
    sound: multiplierBest,
    img: multiplier75Img
  },
  64: {
    label: 'block-64',
    sound: multiplierBest,
    img: multiplier64Img
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
  7: {
    label: 'block-7',
    sound: multiplierGood,
    img: multiplier7Img
  },
  3.5: {
    label: 'block-3.5',
    sound: multiplierGood,
    img: multiplier3dot5Img
  },
  2: {
    label: 'block-2',
    sound: multiplierRegular,
    img: multiplier2Img
  },
  1.1: {
    label: 'block-1.1',
    sound: multiplierRegular,
    img: multiplier1dot1Img
  },
  0.8: {
    label: 'block-0.8',
    sound: multiplierRegular,
    img: multiplier0dot8Img
  },
  0.35: {
    label: 'block-0.35',
    sound: multiplierLow,
    img: multiplier0dot35Img
  },
  0.2: {
    label: 'block-0.2',
    sound: multiplierLow,
    img: multiplier0dot2Img
  }
} as const

export type MultipliersType = keyof typeof multipliers

export function getMultiplier(value: MultipliersType): MultiplierType {
  return multipliers[value]
}

export const multiplyBlocks16Lines = [
  getMultiplier(75),
  getMultiplier(25),
  getMultiplier(7),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.8),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(0.8),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(7),
  getMultiplier(25),
  getMultiplier(75)
]

export const multiplyBlocks15Lines = [
  getMultiplier(64),
  getMultiplier(18),
  getMultiplier(7),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(7),
  getMultiplier(18),
  getMultiplier(64)
]
export const multiplyBlocks14Lines = [
  getMultiplier(25),
  getMultiplier(15),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.8),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(0.8),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(15),
  getMultiplier(25)
]
export const multiplyBlocks13Lines = [
  getMultiplier(25),
  getMultiplier(15),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(15),
  getMultiplier(25)
]
export const multiplyBlocks12Lines = [
  getMultiplier(15),
  getMultiplier(7),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(7),
  getMultiplier(15)
]
export const multiplyBlocks11Lines = [
  getMultiplier(7),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(7)
]
export const multiplyBlocks10Lines = [
  getMultiplier(7),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(7)
]
export const multiplyBlocks9Lines = [
  getMultiplier(7),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.2),
  getMultiplier(0.2),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(7)
]
export const multiplyBlocks8Lines = [
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5)
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
