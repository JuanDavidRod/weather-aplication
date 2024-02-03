import { SearchCities } from './types'

const API_KEY = import.meta.env.VITE_API_KEY
const PATH = import.meta.env.VITE_URL_API

export const searchForecast = async ({ search }: SearchCities) => {
  if (search === '') return null

  try {
    const response = await fetch(`${PATH}forecast.json?key=${API_KEY}&lang=es&q=${search}`)
    const { location, current } = await response.json() as Current
    console.log('🚀 ~ searchWeather ~ { location, current }:', { location, current })
    return {
      name: `${location.name}, ${location.region}`,
      time: location.localtime,
      temp: current.temp_c,
      conditionText: current.condition.text,
      wind: current.wind_kph,
      humidity: current.humidity,
      feelslike: current.feelslike_c
    }
  } catch (e) {
    throw new Error('Error searching weather')
  }
}
