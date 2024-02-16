import { API_KEY, PATH, LANGUAGE } from '@/const/env'
import { SearchCities, Current, Search } from './types'

export const searchCities = async ({ search }: SearchCities) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `${PATH}search.json?key=${API_KEY}&lang=${LANGUAGE}&q=${search}`
    )
    const cities = (await response.json()) as Search[]
    return cities?.map((city) => ({
      value: city.url,
      label: `${city.name}, ${city.region} (${city.country})`
    }))
  } catch (e) {
    throw new Error('Error searching cities')
  }
}

export const searchWeather = async ({ search }: SearchCities) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `${PATH}current.json?key=${API_KEY}&lang=${LANGUAGE}&q=${search}`
    )
    const { location, current } = (await response.json()) as Current
    console.log('🚀 ~ searchWeather ~ { location, current }:', {
      location,
      current
    })
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
