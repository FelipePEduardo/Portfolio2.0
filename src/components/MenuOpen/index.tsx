import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { NavLink } from 'react-router-dom'
import { MenuMobileArrow, MenuMobileContent, MenuMobileTrigger } from './styles'

export function MenuMobile() {
  return (
    <DropdownMenu.Root>
      <MenuMobileTrigger>
        <div></div>
      </MenuMobileTrigger>

      <DropdownMenu.Portal>
        <MenuMobileContent>
          <DropdownMenu.Item>
            <NavLink to="/sobre">Sobre</NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <NavLink to="/habilidades">Habilidades</NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <NavLink to="/projetos">Projetos</NavLink>
          </DropdownMenu.Item>

          <MenuMobileArrow />
        </MenuMobileContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
