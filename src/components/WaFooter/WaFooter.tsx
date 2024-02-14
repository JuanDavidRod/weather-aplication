import styles from './WaFooter.module.css'
import { Row, Col } from 'antd'
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'

const WaFooter = () => {
  return (
    <footer className={styles.footer}>
      <Row align='middle'>
        <Col span={12}>
          <p>Powered by <a href='https://www.weatherapi.com/' title='Free Weather API' target='_blank' rel='noreferrer'>WeatherAPI.com</a></p>
        </Col>
        <Col span={12} className={styles.footer_icon}>
          <a href='https://github.com/JuanDavidRod' target='_blank' rel='noreferrer'> <LinkedinOutlined /></a>
          <a href='https://www.linkedin.com/in/juan-david-rodriguez-hernandez-64142225a/' target='_blank' rel='noreferrer'><GithubOutlined /></a>
        </Col>
      </Row>
    </footer>
  )
}

export default WaFooter
