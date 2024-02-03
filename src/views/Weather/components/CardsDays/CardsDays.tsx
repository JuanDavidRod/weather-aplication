import styles from './CardsDays.module.css'
import WaDayBox from '@/components/WaDayBox/WaDayBox'

interface Props{
  title: string
}

const CardDays = ({ title }: Props) => {
  return (
    <section className={styles.cardDays}>
      <h3>{title}</h3>
      <div className={styles.days__container}>
        <WaDayBox />
      </div>
    </section>
  )
}

export default CardDays
