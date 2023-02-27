import styled from 'styled-components'

export const ListContainer = styled.footer`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 0 auto 3rem;

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
  }
`

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-400']};

  span:last-child {
    max-height: 1.5rem;
  }

  svg {
    opacity: 0;
  }

  &:hover {
    color: ${({ theme }) => theme['gray-100']};
    transition: 0.2s;

    svg {
      transition: 0.2s;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    span:first-child {
      display: none;
    }

    svg {
      opacity: 1;
    }
  }
`
