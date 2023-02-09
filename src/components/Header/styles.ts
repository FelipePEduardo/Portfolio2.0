import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 112rem;
  padding: 4rem 2.5rem 0;
  margin: 0 auto;
`

export const HeaderContent = styled.div`
  background: ${(props) => props.theme['purple-800']};
  padding: 4rem 8rem;
  border-radius: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    font-size: 3.2rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
  }

  > ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      a {
        font-size: 1.4rem;

        color: ${(props) => props.theme['gray-500']};
        letter-spacing: 1.2px;
        text-transform: uppercase;

        &:hover {
          color: ${(props) => props.theme['gray-200']};
          transition: 0.2s;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    padding: 2rem 0;

    > a {
      font-size: 2.8rem;
    }

    > ul {
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        a {
          font-size: 1.3rem;
        }
      }
    }
  }
`
