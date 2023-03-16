import styled from 'styled-components'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const MenuMobileTrigger = styled(DropdownMenu.Trigger)`
  position: relative;
  width: 2.4rem;
  height: 3.2rem;
  background: none;
  border: 0px;
  cursor: pointer;

  > div {
    position: relative;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme['violet-400']};
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    line-height: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0px;
      height: 3px;
      background: ${({ theme }) => theme['violet-400']};
      border-radius: inherit;
      transition: inherit;
      transform-origin: 50% 50%;
    }

    &::before {
      top: -7px;
    }

    &::after {
      top: 7px;
    }
  }
`

export const MenuMobileContent = styled(DropdownMenu.Content)`
  background: ${({ theme }) => theme['violet-500']};
  box-shadow: 0px 10px 38px -10px black;
  padding: 2rem;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  border-radius: 4px;

  a {
    color: ${({ theme }) => theme.white};
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme['gray-100']};
    }
  }

  &[data-side='bottom'] {
    animation-name: slideUpAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const MenuMobileArrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme['violet-400']};
`
