import WaSelect from '@/components/WaSelect/WaSelect'
import style from './Home.module.css'

const Home = () => {
  const options = [
    {
      value: 'jack',
      label: 'Jack'
    },
    {
      value: 'lucy',
      label: 'Lucy'
    },
    {
      value: 'tom',
      label: 'Tom'
    }
  ]
  return (
    <main className={style.home}>
      <h1>Weather App</h1>
      <div className={style.select_city}>
        <h2>Selecciona tu ubicación: </h2>
        <WaSelect placeholder='Selecciona una ciudad' options={options} onChange={() => {}} />

      </div>
    </main>
  )
}

export default Home
