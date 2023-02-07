import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'

export function FooterLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}
