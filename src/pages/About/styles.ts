import styled from 'styled-components'

export const AboutContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 12rem auto 20rem;
`

export const AboutContent = styled.section`
  max-width: 76rem;
  margin: 0 auto;

  > h2 {
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }

  blockquote {
    max-width: 50rem;

    padding-left: 1.5rem;

    font-style: italic;
    color: ${({ theme }) => theme['gray-400']};
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    text-align: center;

    blockquote {
      max-width: none;
    }
  }
`

export const BackgroundTitle = styled.div`
  background-image: linear-gradient(60deg, #80ffea, #d49ef5);
  background-clip: text;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  h1 {
    text-align: center;
    font-size: 3.2rem;

    margin-bottom: 4rem;
  }
`

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 5rem;

  p {
    max-width: 37rem;
    color: ${({ theme }) => theme['gray-400']};
    line-height: 1.6;

    em {
      color: ${({ theme }) => theme['gray-100']};
    }

    strong {
      color: ${({ theme }) => theme['violet-600']};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageAboutContainer = styled.div`
  max-width: 30rem;

  img {
    width: 100%;
    border-radius: 8px;
  }
`
