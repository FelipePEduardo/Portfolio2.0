import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 12rem auto 20rem;
`

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  max-width: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999999px;

  padding: 2rem;
  background: ${({ theme }) => theme['purple-dark-800']};

  img {
    width: 100%;
    border-radius: 9999999px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.8rem;
    color: ${({ theme }) => theme['gray-400']};
    margin-bottom: 0.8rem;
  }

  > div {
    background-image: linear-gradient(60deg, #7938b2, #d49ef5);
    background-clip: text;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme['gray-200']};
    }
  }

  p {
    font-size: 2rem;
  }
`
