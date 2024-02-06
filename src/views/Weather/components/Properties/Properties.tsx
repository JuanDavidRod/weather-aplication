import { Properties as IProperties } from '@/vite-env'
import style from './Properties.module.css'
import WaPropBox from '@/components/WaPropBox/WaPropBox'
import iconWindSpeed from '@/assets/icon-windspeed.png'

interface Props{
    properties: IProperties
}

const Properties = ({ properties: { uv, cloud, gust_kph: gustKph, precip_mm: precipMm, pressure_mb: pressureMb, vis_km: visKM } }: Props) => {
  return (
    <section className={style.properties}>
      <WaPropBox
        title='Indice UV'
        value={uv}
        def='Bajo'
        icon={iconWindSpeed}
      />
      <WaPropBox
        title='Visibilidad'
        value={visKM}
        def='Km'
        icon={iconWindSpeed}
      />
      <WaPropBox
        title='Precipitacion'
        value={precipMm}
        def='mm'
        icon={iconWindSpeed}
      />
      <WaPropBox
        title='Presion Atmosférica'
        value={pressureMb}
        def='mb'
        icon={iconWindSpeed}
      />
      <WaPropBox
        title='Cobertura Nubes'
        value={cloud}
        def='%'
        icon={iconWindSpeed}
      />
      <WaPropBox
        title='Rafagas Viento'
        value={gustKph}
        def='km/h'
        icon={iconWindSpeed}
      />
    </section>
  )
}

export default Properties
