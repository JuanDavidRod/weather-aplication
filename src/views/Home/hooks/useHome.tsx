import { useNavigate } from 'react-router-dom'

const useHome = () => {
  const navigationTo = useNavigate()

  const handleChangeLocation = (location: string) => {
    console.log(location)
    navigationTo('/weather')
  }
  return {
    handleChangeLocation
  }
}

export default useHome
