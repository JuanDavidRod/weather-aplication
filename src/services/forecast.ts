import { Forecast, SearchCities } from './types'

const API_KEY = import.meta.env.VITE_API_KEY
const PATH = import.meta.env.VITE_URL_API

export const searchForecast = async ({ search }: SearchCities) => {
  if (search === '') return null

  try {
    const response = await fetch(`${PATH}forecast.json?key=${API_KEY}&lang=es&days=3&q=${search}`)
    const { location, current,forecast } = await response.json() as Forecast

    let days 

    return {
      name: `${location.name}, ${location.region}`,
      time: location.localtime,
      temp: current.temp_c,
      conditionText: current.condition.text,
      wind: current.wind_kph,
      humidity: current.humidity,
      feelslike: current.feelslike_c,
      days:[
        {
          today:true,
          date:new Date(location.localtime.slice(0,10)),
          avg_temp:current.temp_c,
          conditionCode:current.condition.code
        },
        ...forecast.forecastday.map(d=>({
          today:false,
          date:d.date,
          avg_temp:d.day.avgtemp_c,
          conditionCode:d.day.condition.code
        }))
      ]
    }
  } catch (e) {
    throw new Error('Error searching weather')
  }
}
