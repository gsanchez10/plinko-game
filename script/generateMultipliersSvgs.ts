/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const multipliers = [
  {
    value: 0.2,
    background: '#f7eaff',
    color: '#0f212e',
    fontSize: 10,
    label: '.2'
  },
  {
    value: 0.25,
    background: '#f5dcff',
    color: '#0f212e',
    fontSize: 9,
    label: '.25'
  },
  {
    value: 0.35,
    background: '#f4d6ff',
    color: '#0f212e',
    fontSize: 9,
    label: '.35'
  },
  {
    value: 0.8,
    background: '#f0c1ff',
    color: '#0f212e',
    fontSize: 10,
    label: '.8'
  },
  {
    value: 0.45,
    background: '#f2ceff',
    color: '#0f212e',
    fontSize: 9,
    label: '.45'
  },
  {
    value: 1,
    background: '#edbcff',
    color: '#0f212e',
    fontSize: 11,
    label: '1'
  },
  {
    value: 1.1,
    background: '#e9b3ff',
    color: '#0f212e',
    fontSize: 10,
    label: '1.1'
  },
  {
    value: 1.3,
    background: '#e193ff',
    color: '#0f212e',
    fontSize: 10,
    label: '1.3'
  },
  {
    value: 2,
    background: '#e6aaff',
    color: '#0f212e',
    fontSize: 11,
    label: '2'
  },
  {
    value: 2.8,
    background: '#cf65f8',
    color: '#0f212e',
    fontSize: 10,
    label: '2.8'
  },
  {
    value: 3.5,
    background: '#c44bff',
    color: '#eee',
    fontSize: 10,
    label: '3.5'
  },
  {
    value: 4.5,
    background: '#cc44ff',
    color: '#eee',
    fontSize: 10,
    label: '4.5'
  },
  { value: 7, background: '#cf2bff', color: '#eee', fontSize: 11, label: '7' },
  { value: 9, background: '#c52bff', color: '#eee', fontSize: 11, label: '9' },
  {
    value: 15,
    background: '#b82bff',
    color: '#eee',
    fontSize: 11,
    label: '15'
  },
  {
    value: 18,
    background: '#b02bff',
    color: '#eee',
    fontSize: 11,
    label: '18'
  },
  {
    value: 25,
    background: '#8814b1 ',
    color: '#eee',
    fontSize: 11,
    label: '25'
  },
  {
    value: 33,
    background: '#9d27b3',
    color: '#eee',
    fontSize: 11,
    label: '33'
  },
  {
    value: 35,
    background: '#8d27b3',
    color: '#eee',
    fontSize: 11,
    label: '35'
  },
  {
    value: 75,
    background: '#7f06ac',
    color: '#eee',
    fontSize: 11,
    label: '75'
  },
  {
    value: 88,
    background: '#7f06ab',
    color: '#eee',
    fontSize: 11,
    label: '88'
  },
  {
    value: 64,
    background: '#7f06ab',
    color: '#eee',
    fontSize: 11,
    label: '64'
  },
  { value: 90, background: '#7f00ae', color: '#eee', fontSize: 11, label: '90' }
]

const generateSVG = (
  value: string,
  background: string,
  color: string,
  fontSize: number
): string => {
  return `
<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <rect width="20" height="20" rx="3" ry="3" fill="${background}" />
  <text x="50%" y="50%" font-family="Arial" font-size="${fontSize}" fill="${color}" text-anchor="middle" alignment-baseline="central">${value}</text>
</svg>
`
}

multipliers.forEach(multiplier => {
  const svgContent = generateSVG(
    multiplier.label,
    multiplier.background,
    multiplier.color,
    multiplier.fontSize
  )
  const filePath = path.join(
    __dirname,
    `/../public/assets/img/multipliers/multiplier-${multiplier.value}.svg`
  )
  fs.writeFileSync(filePath, svgContent)
  console.log(`Generated ${filePath}`)
})
