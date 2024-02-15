import WaSelect from '@/components/WaSelect/WaSelect'
import style from './Home.module.css'
import useHome from './hooks/useHome'
import { ReactElement } from 'react'

const Home = () => {
  const { options, loading, handleChangeLocation, handleSearchCity, renderSuggest } = useHome()

  return (
    <main className={style.home}>
      <h1>Weather App</h1>
      <div className={style.select_city}>
        <h2>Selecciona tu ubicación: </h2>
        <WaSelect
          placeholder='Selecciona una ciudad'
          options={options}
          onChange={(value) => { handleChangeLocation(value) }}
          onSearch={(value) => handleSearchCity(value)}
          loading={loading}
        />
      </div>
      <div className={style.select_city}>
        <h3> Lugares recomendados: </h3>
        {renderSuggest(({ key, label, value }) => <p key={key} onClick={() => handleChangeLocation(value)}>- {label}</p> as ReactElement)}
      </div>
    </main>
  )
}

export default Home
