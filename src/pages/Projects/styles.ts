import styled from 'styled-components'

export const ProjetcsContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 12rem auto 20rem;
`

export const ProjetcsContent = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 76rem;
  margin: 0 auto;

  > div:first-child {
    background-image: linear-gradient(60deg, #f2555a, #d49ef5);
    background-clip: text;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    h1 {
      font-size: 4rem;
      margin-bottom: 1.2rem;
    }
  }

  > p {
    color: ${({ theme }) => theme['gray-100']};

    margin-bottom: 3rem;
  }

  > div:last-child {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 850px) {
    > div:last-child {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    > div:last-child {
      grid-template-columns: none;
    }
  }
`
