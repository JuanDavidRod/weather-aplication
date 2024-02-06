import style from './WaPropBox.module.css'

type WaPropBoxProps = {
  title:string;
  value:string|number
  def:string
  icon:string|null
}

const WaPropBox = ({ title = '-', value = '--', def = '_', icon }:WaPropBoxProps) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        {
          icon &&
            <img
              src={icon}
              alt={title}
              width={20}
              height={22}
            />
        }
        <p>{title}</p>
      </div>
      <div className={style.detail}>
        <p className={style.detail_value}>{value}</p>
        <p className={style.detail_def}>{def}</p>
      </div>
    </div>
  )
}

export default WaPropBox
