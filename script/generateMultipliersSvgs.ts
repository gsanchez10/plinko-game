/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const multipliers = [
  { value: 0.2, background: '#f7eaff', color: '#0f212e' },
  { value: 0.25, background: '#f5dcff', color: '#0f212e' },
  { value: 0.35, background: '#f4d6ff', color: '#0f212e' },
  { value: 0.8, background: '#f0c1ff', color: '#0f212e' },
  { value: 0.45, background: '#f2ceff', color: '#0f212e' },
  { value: 1, background: '#edbcff', color: '#0f212e' },
  { value: 1.1, background: '#e9b3ff', color: '#0f212e' },
  { value: 1.3, background: '#e193ff', color: '#0f212e' },
  { value: 2, background: '#e6aaff', color: '#0f212e' },
  { value: 2.8, background: '#cf65f8', color: '#0f212e' },
  { value: 3.5, background: '#c44bff', color: '#eee' },
  { value: 4.5, background: '#cc44ff', color: '#eee' },
  { value: 7, background: '#cf2bff', color: '#eee' },
  { value: 9, background: '#c52bff', color: '#eee' },
  { value: 15, background: '#b82bff', color: '#eee' },
  { value: 18, background: '#b02bff', color: '#eee' },
  { value: 25, background: '#8814b1 ', color: '#eee' },
  { value: 33, background: '#9d27b3', color: '#eee' },
  { value: 35, background: '#8d27b3', color: '#eee' },
  { value: 75, background: '#7f06ac', color: '#eee' },
  { value: 88, background: '#7f06ab', color: '#eee' },
  { value: 64, background: '#7f06ab', color: '#eee' },
  { value: 90, background: '#7f00ae', color: '#eee' }
]

const generateSVG = (
  value: number,
  background: string,
  color: string
): string => {
  return `
<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
  <rect width="18" height="18" rx="3" ry="3" fill="${background}" />
  <text x="50%" y="50%" font-family="Arial" font-size="9" fill="${color}" text-anchor="middle" alignment-baseline="central">${value}</text>
</svg>
`
}

multipliers.forEach(multiplier => {
  const svgContent = generateSVG(
    multiplier.value,
    multiplier.background,
    multiplier.color
  )
  const filePath = path.join(
    __dirname,
    `/../public/assets/img/multipliers/multiplier-${multiplier.value}.svg`
  )
  fs.writeFileSync(filePath, svgContent)
  console.log(`Generated ${filePath}`)
})
