import { WeatherCurrent } from '@/vite-env'
import { Forecast, SearchCities } from './types'

const API_KEY = import.meta.env.VITE_API_KEY
const PATH = import.meta.env.VITE_URL_API

export const searchForecast = ({ search }: SearchCities) :Promise<WeatherCurrent> => {
  return fetch(`${PATH}forecast.json?key=${API_KEY}&lang=es&days=3&q=${search}`)
    .then(res => res.json())
    .then(({ location, current, forecast }:Forecast) => {
      const regex = /(\w{3})\.png/
      const match = current.condition.icon.match(regex)
      const iconCode = Number(match ? match[1] : 200)

      return {
        name: `${location.name}, ${location.region}`,
        time: location.localtime,
        temp: current.temp_c,
        conditionText: current.condition.text,
        wind: current.wind_kph,
        humidity: current.humidity,
        feelslike: current.feelslike_c,
        days: [
          {
            today: true,
            date: new Date(location.localtime.slice(0, 10)),
            avg_temp: current.temp_c,
            conditionCode: current.condition.code
          },
          ...forecast.forecastday.map(d => ({
            today: false,
            date: d.date,
            avg_temp: d.day.avgtemp_c,
            conditionCode: d.day.condition.code
          }))
        ],
        properties: {
          uv: current.uv,
          vis_km: current.vis_km,
          precip_mm: current.precip_mm,
          pressure_mb: current.pressure_mb,
          cloud: current.cloud,
          gust_kph: current.gust_kph
        },
        iconCode,
        isDay: current.is_day === 1
      }
    }
    )
}
