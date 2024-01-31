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

export const searchCities = async ({ search }: SearchCities) => {
  if (search === '') return null

  try {
    const response = await fetch(`${PATH}search.json?key=${API_KEY}&q=${search}`)
    const cities = await response.json() as Search[]

    return cities?.map(city => ({
      value: city.id,
      label: `${city.name}, ${city.region} (${city.country})`
    }))
  } catch (e) {
    throw new Error('Error searching cities')
  }
}

// /current.json?q=id:2801268
