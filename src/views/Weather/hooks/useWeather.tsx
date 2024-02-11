import { useEffect, useState } from 'react'
import { WeatherCurrent } from '@/vite-env'
import { searchForecast } from '@/services/forecast'

const useWeather = (idcity: string) => {
  const [weather, setWeather] = useState({} as WeatherCurrent)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    searchForecast({ search: idcity })
      .then(setWeather)
      .catch((err) => setError(err))
      .finally(() => { setLoading(false) })
  }, [])

  return {
    weather,
    loading,
    error
  }
}

export default useWeather
