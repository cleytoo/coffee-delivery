import { Route, Routes } from 'react-router-dom'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { Layout } from '../_layout'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
