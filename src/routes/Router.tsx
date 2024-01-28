import WaLayout from '@/components/WaLayout/WaLayout'
import Home from '@/views/Home/Home'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<WaLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
