import iconHumidity from '@/assets/icon-humidity.png'
import iconWindSpeed from '@/assets/icon-windspeed.png'
import iconFeelsLike from '@/assets/icon-feelslike.png'

import style from './InfoAditional.module.css'

interface Props{
    humidity: number
    wind: number
    feelslike: number
}

const InfoAditional = ({ humidity, wind, feelslike }: Props) => {
  return (
    <section className={style.infoAditional}>
      <div className={style.infoAditional__box}>
        <img
          src={iconHumidity}
          alt='icono porcentaje humedad'
          width={21}
          height={29}
        />
        <h4> {humidity} mm</h4>
        <h5> Humedad</h5>
      </div>

      <div className={style.infoAditional__box}>
        <img
          src={iconWindSpeed}
          alt='icono velocidad vientos'
          width={30}
          height={30}
        />
        <h4> {wind}  Km/h</h4>
        <h5> Vientos</h5>
      </div>

      <div className={style.infoAditional__box}>
        <img
          src={iconFeelsLike}
          alt='icono sensación termica'
          width={30}
          height={32}
        />
        <h4> {feelslike}°</h4>
        <h5> Sensación</h5>
      </div>
    </section>
  )
}

export default InfoAditional
