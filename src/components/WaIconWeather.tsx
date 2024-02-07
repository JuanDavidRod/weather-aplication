import React from 'react'

interface Props {
    iconCode: number
    alt: string
}
const WaIconWeather = ({ iconCode, alt }: Props) => {
  return (
    <img
      src={`/src/assets/icons-weather/night/${iconCode}.svg`}
      alt={alt}
      width={50}
      height={50}
    />
  )
}

export default WaIconWeather
