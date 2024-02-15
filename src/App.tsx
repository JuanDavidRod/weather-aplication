import Router from '@/routes/Router'
import { ConfigProvider } from 'antd'

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#282828',
          colorBgElevated: '#282828',
          colorText: '#fff',
          colorTextBase: '#ff7ff0'
        },
        components: {
          Select: {
            optionSelectedColor: '#fff',
            optionPadding: '9px 12px'
          }
        }
      }}
    >
      <Router />
    </ConfigProvider>
  )
}

export default App
