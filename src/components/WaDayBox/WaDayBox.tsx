import { Days } from '@/vite-env'
import styles from './WaDayBox.module.css'
import WaIconWeather from '../WaIconWeather'
import moment from 'moment'

const formatDay = (date: any) => {
  const formatDate = moment(date).format('DD/MM')
  return formatDate
}
interface DayBoxProps {
  day:Days
}

const DayBox = ({ day }:DayBoxProps) => {
  const isToDay = styles.toDay

  return (
    <div className={`${styles.days__item} ${day.today && isToDay}`}>
      <p>{formatDay(day.date)}</p>

      <WaIconWeather iconCode={day.conditionCode} alt='imagen' isDay />
      <h5>{Math.round(day.avg_temp)}°</h5>
    </div>
  )
}

export default DayBox
