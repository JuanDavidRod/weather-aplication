import styles from './WaDayBox.module.css'
import moment from 'moment'

const formatDay = (date: any) => {
  const formatDate = moment(date).format('DD/MM')
  return formatDate
}

const DayBox = () => {
  const isToDay = styles.toDay
  //   const { day } = forecast
  //   const { condition } = day

  return (
    <div className={`${styles.days__item} ${isToDay}`}>
      <p>{formatDay('2024-02-03')}</p>
      <h5>{Math.round(11.1)}°</h5>
    </div>
  )
}

export default DayBox
