import WaHeader from '@/components/WaHeader/WaHeader'
import { useParams } from 'react-router-dom'
import style from './Weather.module.css'
import InfoAditional from './components/InfoAfitional/InfoAditional'
import CardDays from './components/CardsDays/CardsDays'
import Properties from './components/Properties/Properties'
import useWeather from './hooks/useWeather'
import { Spin } from 'antd'

const Weather = () => {
  const { idcity = '' } = useParams()
  const { weather, loading, error } = useWeather(idcity)

  if (error) return <h1>{error}</h1>

  return loading
    ? <Spin size='large' fullscreen />
    : (

      <div className={`${style.panel} ${weather.isDay ? style.bg_day : style.bg_night}`}>

        <WaHeader name={weather?.name} time={weather?.time} iconCode={weather.iconCode} isDay={weather.isDay} />
        <section className={style.temperature}>
          <h2>{Math.round(weather?.temp)}°</h2>
          <h4>{weather?.conditionText}</h4>

        </section>

        <InfoAditional
          wind={weather.wind}
          feelslike={weather.feelslike}
          humidity={weather.humidity}
        />

        {weather?.days && <CardDays title='Proximos días' days={weather.days} />}

        {weather?.properties && <Properties properties={weather.properties} />}

      </div>
      )
}

export default Weather
