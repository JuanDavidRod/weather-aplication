import WaHeader from '@/components/WaHeader/WaHeader'
import { searchForecast } from '@/services/forecast'
import { WeatherCurrent } from '@/vite-env'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Weather.module.css'
import InfoAditional from './components/InfoAfitional/InfoAditional'
import CardDays from './components/CardsDays/CardsDays'
// import Properties from './components/Properties/Properties'

const Weather = () => {
  const { idcity = '' } = useParams()

  const [weather, setWeather] = useState({} as WeatherCurrent)

  useEffect(() => {
    searchForecast({ search: idcity })
      .then(setWeather)
      .catch((err) => console.log(err))
  }, [])

  return (

    <div className={style.panel}>
      <WaHeader name={weather?.name} time={weather?.time} iconCode={weather.iconCode} />
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

      {/* <Properties properties={weather.properties} /> */}

    </div>
  )
}

export default Weather
