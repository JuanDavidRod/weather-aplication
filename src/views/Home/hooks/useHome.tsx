import { ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchCities } from '@/services/weather'
import { RenderCityKey, type City } from '@/vite-env'

const useHome = () => {
  const [value, setValue] = useState<string>('')
  const [options, setOptions] = useState<City[]>([])
  const [optionSuggest, setOptionSuggest] = useState<City[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const navigationTo = useNavigate()

  const handleChangeLocation = (location: string) => {
    console.log(location)
    navigationTo('/weather/' + location)
  }

  const handleSearchCity = async (search:string) => {
    setValue(search)
    setLoading(true)
    try {
      const cities = await searchCities({ search })
      if (cities?.length) setOptions(cities)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getCityByLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function ({ coords }) {
        const search = `${coords.latitude},${coords.longitude}`
        try {
          const cities = await searchCities({ search })
          if (cities?.length) setOptionSuggest(cities)
        } catch (error) {
          console.log(error)
        }
      })
    } else {
      console.log('Geolocation is not available in your browser.')
    }
  }

  const renderSuggest = (render: RenderCityKey) :undefined |ReactElement[] => {
    if (optionSuggest.length === 0) return
    console.log(optionSuggest)
    return optionSuggest.map(({ label, value }, key) => (render({ key, label, value })))
  }

  useEffect(() => {
    getCityByLocation()
  }, [])

  return {
    value,
    options,
    loading,
    handleChangeLocation,
    handleSearchCity,
    renderSuggest
  }
}

export default useHome
