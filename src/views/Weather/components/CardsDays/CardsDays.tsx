import { Days } from '@/vite-env'
import styles from './CardsDays.module.css'
import WaDayBox from '@/components/WaDayBox/WaDayBox'

interface Props{
  title: string
  days: Days[]
}

const CardDays = ({ title, days }: Props) => {
  return (
    <section className={styles.cardDays}>
      <h3>{title}</h3>
      <div className={styles.days__container}>
        {
          days.length > 0 && days.map(day=>
            <WaDayBox key={day.date.toString()} day={day}/>
          )
        }
      </div>
    </section>
  )
}

export default CardDays
