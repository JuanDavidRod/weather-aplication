import WaHeader from '@/components/WaHeader/WaHeader'
// import { searchWeather } from '@/services/weather'
import { searchForecast } from '@/services/forecast'
import { WeatherCurrent } from '@/vite-env'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Weather.module.css'
import InfoAditional from './components/InfoAfitional/InfoAditional'
import CardDays from './components/CardsDays/CardsDays'

const Weather = () => {
  const { idcity } = useParams()

  const [weather, setWeather] = useState<WeatherCurrent>({} as WeatherCurrent)

  console.log('idcity', idcity)

  useEffect(() => {
    (async () => {
      if (idcity) {
        try {
          const weatherCurrent = await searchForecast({ search: idcity })
          if (weatherCurrent) setWeather(weatherCurrent)
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [])

  return (

    <div className={style.panel}>
      <WaHeader name={weather?.name} time={weather?.time} />
      <section className={style.temperature}>
        <h2>{weather?.temp}°</h2>
        <h4>{weather?.conditionText}</h4>

      </section>

      <InfoAditional
        wind={weather.wind}
        feelslike={weather.feelslike}
        humidity={weather.humidity}
      />

     
      {weather?.days && <CardDays title='Proximos días' days={weather.days} />}

    </div>
  )
}

export default Weather
