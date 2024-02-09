interface Props {
    iconCode: number
    alt: string
    isDay:boolean
}
const WaIconWeather = ({ iconCode, alt, isDay }: Props) => {
  return (
    <img
      src={`/src/assets/icons-weather/${isDay ? 'day' : 'night'}/${iconCode}.svg`}
      alt={alt}
      width={50}
      height={50}
    />
  )
}

export default WaIconWeather
