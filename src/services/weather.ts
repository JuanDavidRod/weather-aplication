const API_KEY = 'b11b57c518334f1e81705008243101'
const PATH = 'http://api.weatherapi.com/v1/'

type SearchCities = {
  search: string
}

export interface Search {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export type Condition = {
  text: string;
  icon: string;
  code: number;
}

export type CurrentClass = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export type Current = {
  location: Location;
  current: CurrentClass;
}

export const searchCities = async ({ search }: SearchCities) => {
  if (search === '') return null

  try {
    const response = await fetch(`${PATH}search.json?key=${API_KEY}&q=${search}`)
    const cities = await response.json() as Search[]

    return cities?.map(city => ({
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
    const response = await fetch(`${PATH}current.json?key=${API_KEY}&q=${search}`)
    const { location, current } = await response.json() as Current

    return {
      name: `${location.name}, ${location.region}`,
      time: location.localtime.slice(-5),
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
