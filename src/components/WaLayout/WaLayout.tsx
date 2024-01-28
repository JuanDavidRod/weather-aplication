import { Outlet } from 'react-router-dom'
import WaFooter from '../WaFooter/WaFooter'
import style from './WaLayout.module.css'

function WaLayout () {
  return (
    <div className={style.container}>
      <Outlet />
      <WaFooter />
    </div>
  )
}

export default WaLayout
