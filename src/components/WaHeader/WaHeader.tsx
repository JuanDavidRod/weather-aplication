import style from './WaHeader.module.css'

type WaHeaderProps = {
  name:string| undefined,
  time:string| undefined
}

const WaHeader = ({ name, time }:WaHeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.header__location}>
        <h3>{time}</h3>
        <h2>{name}</h2>
      </div>
    </header>
  )
}

export default WaHeader
