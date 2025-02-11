/* eslint-disable import/no-absolute-path */
// multiplierImages
import { LinesType, MultiplierType, MultiplierValues } from '../@types'

const multiplierBest = '/assets/sounds/multiplier-best.wav'
const multiplierGood = '/assets/sounds/multiplier-good.wav'
const multiplierLow = '/assets/sounds/multiplier-low.wav'
const multiplierRegular = '/assets/sounds/multiplier-regular.wav'

const multiplier0dot3Img = '/assets/img/multipliers/multiplier-0.3.svg'
const multiplier0dot5Img = '/assets/img/multipliers/multiplier-0.5.svg'
const multiplier1dot5Img = '/assets/img/multipliers/multiplier-1.5.svg'
const multiplier1Img = '/assets/img/multipliers/multiplier-1.svg'
const multiplier10Img = '/assets/img/multipliers/multiplier-10.svg'
const multiplier110Img = '/assets/img/multipliers/multiplier-110.svg'
const multiplier15Img = '/assets/img/multipliers/multiplier-15.svg'
const multiplier18Img = '/assets/img/multipliers/multiplier-18.svg'
const multiplier2Img = '/assets/img/multipliers/multiplier-2.svg'
const multiplier25Img = '/assets/img/multipliers/multiplier-25.svg'
const multiplier3Img = '/assets/img/multipliers/multiplier-3.svg'
const multiplier33Img = '/assets/img/multipliers/multiplier-33.svg'
const multiplier41Img = '/assets/img/multipliers/multiplier-41.svg'
const multiplier5Img = '/assets/img/multipliers/multiplier-5.svg'
const multiplier88Img = '/assets/img/multipliers/multiplier-88.svg'
const multiplier75Img = '/assets/img/multipliers/multiplier-75.svg'
const multiplier7Img = '/assets/img/multipliers/multiplier-7.svg'
const multiplier3dot5Img = '/assets/img/multipliers/multiplier-3.5.svg'
const multiplier1dot1Img = '/assets/img/multipliers/multiplier-1.1.svg'
const multiplier0dot8Img = '/assets/img/multipliers/multiplier-0.8.svg'
const multiplier0dot35Img = '/assets/img/multipliers/multiplier-0.35.svg'
const multiplier0dot2Img = '/assets/img/multipliers/multiplier-0.2.svg'

// multiplierSoundEffects
const multiplierSounds = {
  0.2: multiplierLow,
  0.3: multiplierLow,
  0.35: multiplierLow,
  0.8: multiplierLow,
  0.5: multiplierLow,
  1: multiplierRegular,
  1.1: multiplierRegular,
  1.5: multiplierRegular,
  2: multiplierRegular,
  3: multiplierRegular,
  3.5: multiplierRegular,
  5: multiplierGood,
  7: multiplierGood,
  10: multiplierGood,
  15: multiplierBest,
  18: multiplierBest,
  25: multiplierBest,
  33: multiplierBest,
  41: multiplierBest,
  75: multiplierBest,
  88: multiplierBest,
  110: multiplierBest
} as const

const multipliers = {
  110: {
    label: 'block-110',
    sound: multiplierBest,
    img: multiplier110Img
  },
  88: {
    label: 'block-88',
    sound: multiplierBest,
    img: multiplier88Img
  },
  75: {
    label: 'block-75',
    sound: multiplierBest,
    img: multiplier75Img
  },
  41: {
    label: 'block-41',
    sound: multiplierBest,
    img: multiplier41Img
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
  10: {
    label: 'block-10',
    sound: multiplierGood,
    img: multiplier10Img
  },
  7: {
    label: 'block-7',
    sound: multiplierGood,
    img: multiplier7Img
  },
  5: {
    label: 'block-5',
    sound: multiplierGood,
    img: multiplier5Img
  },
  3.5: {
    label: 'block-3.5',
    sound: multiplierRegular,
    img: multiplier3dot5Img
  },
  3: {
    label: 'block-3',
    sound: multiplierRegular,
    img: multiplier3Img
  },
  2: {
    label: 'block-2',
    sound: multiplierRegular,
    img: multiplier2Img
  },
  1.5: {
    label: 'block-1.5',
    sound: multiplierRegular,
    img: multiplier1dot5Img
  },
  1.1: {
    label: 'block-1.1',
    sound: multiplierRegular,
    img: multiplier1dot1Img
  },
  1: {
    label: 'block-1',
    sound: multiplierRegular,
    img: multiplier1Img
  },
  0.8: {
    label: 'block-0.8',
    sound: multiplierLow,
    img: multiplier0dot8Img
  },
  0.5: {
    label: 'block-0.5',
    sound: multiplierLow,
    img: multiplier0dot5Img
  },
  0.35: {
    label: 'block-0.35',
    sound: multiplierLow,
    img: multiplier0dot35Img
  },
  0.3: {
    label: 'block-0.3',
    sound: multiplierLow,
    img: multiplier0dot3Img
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
  getMultiplier(41),
  getMultiplier(18),
  getMultiplier(10),
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
  getMultiplier(10),
  getMultiplier(18),
  getMultiplier(41)
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
  getMultiplier(18),
  getMultiplier(10),
  getMultiplier(2),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(2),
  getMultiplier(10),
  getMultiplier(18)
]
export const multiplyBlocks11Lines = [
  getMultiplier(15),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(2),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(2),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(15)
]
export const multiplyBlocks10Lines = [
  getMultiplier(15),
  getMultiplier(3.5),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.35),
  getMultiplier(0.2),
  getMultiplier(0.35),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(3.5),
  getMultiplier(15)
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
