import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 112rem;
  padding: 4rem 2.5rem 0;
  margin: 0 auto;
`

export const HeaderContent = styled.div`
  background: ${({ theme }) => theme['purple-dark-800']};
  padding: 4rem 8rem;
  border-radius: 2.4rem;
  border: 2px solid ${({ theme }) => theme['purple-dark-700']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    font-size: 3.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme['gray-100']};
  }

  @media (max-width: 768px) {
    padding: 3rem 4rem;

    > a {
      font-size: 2.4rem;
    }
  }
`

export const MenuDesktop = styled.div`
  > ul {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    li {
      a {
        font-size: 1.4rem;

        color: ${({ theme }) => theme['gray-400']};
        letter-spacing: 1.2px;
        text-transform: uppercase;

        &:hover {
          color: ${({ theme }) => theme['gray-100']};
          transition: 0.2s;
        }

        &[aria-pressed='true'] {
          color: ${({ theme }) => theme['gray-100']};
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`

export const MenuMobileContainer = styled.div`
  position: relative;

  @media (min-width: 769px) {
    display: none;
  }
`

export const Menu = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: ${(props) => props.theme['pink-200']};
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0px;
    height: 3px;
    background: ${(props) => props.theme['pink-200']};
    border-radius: inherit;
    transition: inherit;
    transform-origin: 50% 50%;
  }

  &::before {
    top: 7px;
  }

  &::after {
    top: -7px;
  }
`
