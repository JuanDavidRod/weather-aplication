import { useEffect, useState } from 'react'
import { City, WeatherCurrent } from '@/vite-env'
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

  useEffect(() => {
    if (weather?.name) {
      const localSuggest = JSON.parse(localStorage.getItem('WASuggest') ?? '[]') || []

      const exist = localSuggest.find((objeto:City) => (objeto.value === idcity))

      if (!exist) {
        localSuggest.push({ label: weather.name, value: idcity })
        localStorage.setItem('WASuggest', JSON.stringify(localSuggest))
      }
    }
  }, [weather])

  return {
    weather,
    loading,
    error
  }
}

export default useWeather
