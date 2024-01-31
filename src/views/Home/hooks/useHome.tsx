import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchCities } from '@/services/weather'
import { type City } from '@/vite-env'

const useHome = () => {
  const [value, setValue] = useState<string>('')
  const [options, setOptiones] = useState<City[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const navigationTo = useNavigate()

  const handleChangeLocation = (location: string) => {
    console.log(location)
    navigationTo('/weather')
  }

  const handleSearchCity = async (search:string) => {
    setValue(search)
    setLoading(true)
    try {
      const cities = await searchCities({ search })
      if (cities?.length) setOptiones(cities)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(true)
    }
  }

  return {
    value,
    options,
    loading,
    handleChangeLocation,
    handleSearchCity
  }
}

export default useHome
