import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/HeaderLayout'
import { FooterLayout } from './layouts/FooterLayout'
import { About } from './pages/About'

import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<FooterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
        </Route>
      </Route>
    </Routes>
  )
}
