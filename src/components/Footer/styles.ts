import styled from 'styled-components'

export const ListContainer = styled.div`
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

  color: ${(props) => props.theme['gray-500']};

  svg {
    opacity: 0;
  }

  &:hover {
    color: ${(props) => props.theme['gray-200']};
    transition: 0.2s;

    svg {
      transition: 0.2s;
      opacity: 1;
    }
  }
`
