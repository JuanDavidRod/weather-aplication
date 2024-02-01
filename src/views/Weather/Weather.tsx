import WaHeader from '@/components/WaHeader/WaHeader'
import { searchWeather } from '@/services/weather'
import { WeatherCurrent } from '@/vite-env'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Weather = () => {
  const { idcity } = useParams()

  const [weather, setWeather] = useState<WeatherCurrent>()

  console.log('idcity', idcity)

  useEffect(() => {
    (async () => {
      if (idcity) {
        try {
          const weatherCurrent = await searchWeather({ search: idcity })
          if (weatherCurrent) setWeather(weatherCurrent)
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [])

  return (

    <div className='panel'>
      <WaHeader name={weather?.name} time={weather?.time} />
      <section className='temperature'>
        <h2>{weather?.temp} ° </h2>
        <h4>{weather?.conditionText}</h4>

      </section>
    </div>
  )
}

export default Weather
