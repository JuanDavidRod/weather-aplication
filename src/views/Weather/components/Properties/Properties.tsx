import { Properties as IProperties } from '@/vite-env'
import style from './Properties.module.css'
import WaPropBox from '@/components/WaPropBox/WaPropBox'

import clouds from '@/assets/icons-props/clouds.svg'
import precipitation from '@/assets/icons-props/precipitation.svg'
import pressure from '@/assets/icons-props/pressure.svg'
import winds from '@/assets/icons-props/winds.svg'
import iconUv from '@/assets/icons-props/uv.svg'
import visibility from '@/assets/icons-props/visibility.svg'

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
        icon={iconUv}
      />
      <WaPropBox
        title='Visibilidad'
        value={visKM}
        def='Km'
        icon={visibility}
      />
      <WaPropBox
        title='Precipitacion'
        value={precipMm}
        def='mm'
        icon={precipitation}
      />
      <WaPropBox
        title='Presion Atmosférica'
        value={pressureMb}
        def='mb'
        icon={pressure}
      />
      <WaPropBox
        title='Cobertura Nubes'
        value={cloud}
        def='%'
        icon={clouds}
      />
      <WaPropBox
        title='Rafagas Viento'
        value={gustKph}
        def='km/h'
        icon={winds}
      />
    </section>
  )
}

export default Properties
