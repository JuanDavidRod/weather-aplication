import styles from './WaFooter.module.css'
import { Row, Col } from 'antd'
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'

const WaFooter = () => {
  return (
    <footer className={styles.footer}>
      <Row align='middle'>
        <Col span={12}>
          <p>Powered by <strong>WeatherAPI.com</strong></p>
        </Col>
        <Col span={12} className={styles.footer_icon}>
          <LinkedinOutlined />
          <GithubOutlined />
        </Col>
      </Row>
    </footer>
  )
}

export default WaFooter
