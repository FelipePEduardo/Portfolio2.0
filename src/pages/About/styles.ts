import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 12rem auto 20rem;
`

export const AboutContent = styled.div`
  max-width: 76rem;
  margin: 0 auto;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > h2 {
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }

  blockquote {
    max-width: 50rem;

    padding-left: 1.5rem;

    font-style: italic;
    color: ${(props) => props.theme['gray-500']};
    line-height: 1.4;
  }
`

export const ImageAboutContainer = styled.div`
  max-width: 30rem;

  img {
    width: 100%;
    border-radius: 8px;
  }
`

export const AboutMeContainer = styled.div`
  width: 41rem;

  > div {
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

      margin-bottom: 2rem;
    }
  }

  p {
    color: ${(props) => props.theme['gray-500']};
    line-height: 1.6;

    em {
      color: ${(props) => props.theme['gray-200']};
    }

    strong {
      color: ${(props) => props.theme.purple};
    }
  }
`
