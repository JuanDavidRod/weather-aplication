import WeatherIconMapper, { sunnyIconCode } from '@/utils/WeatherIconMapper'
import style from './WaHeader.module.css'
import WaIconWeather from '../WaIconWeather'

type WaHeaderProps = {
  name?:string,
  time?:string,
  iconCode?: number,
}

const WaHeader = ({ name, time, iconCode = sunnyIconCode }:WaHeaderProps) => {
  const weatherAlt = WeatherIconMapper.mapIconCodeToImage(iconCode)
  console.log('🚀 ~ WaHeader ~ iconCode:', iconCode)

  return (
    <header className={style.header}>
      <div className={style.header__location}>
        <div>
          <h3>{time}</h3>
          <h2>{name}</h2>
        </div>
        <WaIconWeather iconCode={iconCode} alt={weatherAlt} />
        {/* <div>
          {weatherImage}
        </div> */}
      </div>
    </header>
  )
}

export default WaHeader
