import {
  HeaderContainer,
  HeaderContent,
  MenuMobileContainer,
  MenuDesktop,
} from './styles'
import { NavLink } from 'react-router-dom'
import { MenuMobile } from '../MenuOpen'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">&lt;Portfolio /&gt;</NavLink>

        <MenuDesktop>
          <ul>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/habilidades">Habilidades</NavLink>
            </li>
            <li>
              <NavLink to="/projetos">Projetos</NavLink>
            </li>
          </ul>
        </MenuDesktop>

        <MenuMobileContainer>
          <MenuMobile />
        </MenuMobileContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
