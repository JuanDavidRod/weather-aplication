import WaHeader from '@/components/WaHeader/WaHeader'
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
        <h2>{Math.round(weather?.temp)}°</h2>
        <h4>{weather?.conditionText}</h4>

      </section>

      <InfoAditional
        wind={weather.wind}
        feelslike={weather.feelslike}
        humidity={weather.humidity}
      />

      {weather?.days && <CardDays title='Proximos días' days={weather.days} />}

      <ul>
        <li>{weather.uv} - Índice UV.</li>
        <li>{weather.vis_km} - Visibilidad en kilómetros.</li>
        <li>{weather.precip_mm}  - Cantidad de precipitación en milímetros.</li>
        <li>{weather.pressure_mb} - Presión atmosférica en milibares.</li>
        <li>{weather.cloud} - Cobertura de nubes en porcentaje.</li>
        <li>{weather.gust_kph} - Velocidad máxima de ráfagas de viento</li>
        <li>{weather.gust_kph} kilómetros por hora.</li>
      </ul>

    </div>
  )
}

export default Weather
