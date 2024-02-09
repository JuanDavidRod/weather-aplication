import WeatherIconMapper, { sunnyIconCode } from '@/utils/WeatherIconMapper'
import style from './WaHeader.module.css'
import WaIconWeather from '../WaIconWeather'

type WaHeaderProps = {
  name?:string,
  time?:string,
  iconCode?: number,
  isDay:boolean
}

const WaHeader = ({ name, time, iconCode = sunnyIconCode, isDay }:WaHeaderProps) => {
  const weatherAlt = WeatherIconMapper.mapIconCodeToImage(iconCode)

  return (
    <header className={style.header}>
      <div className={style.header__location}>
        <div>
          <h3>{time}</h3>
          <h2>{name}</h2>
        </div>
        <WaIconWeather iconCode={iconCode} alt={weatherAlt} isDay={isDay} />
      </div>
    </header>
  )
}

export default WaHeader
