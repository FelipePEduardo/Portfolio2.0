import { HeaderContainer, HeaderContent } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">&lt;Portfolio /&gt;</NavLink>

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
      </HeaderContent>
    </HeaderContainer>
  )
}
