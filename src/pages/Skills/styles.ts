import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 12rem auto 20rem;
`

const BaseContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 76rem;
  margin: 0 auto;
`

export const CoursesContent = styled(BaseContainer)`
  margin-bottom: 4.8rem;

  p {
    margin-bottom: 1.6rem;
  }

  > div:first-child {
    background-image: linear-gradient(60deg, #56ffa5 0%, #fff 100%);
    background-clip: text;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    h2 {
      font-size: 3.2rem;
      margin-bottom: 2rem;
    }
  }
`

export const SkillsContainer = styled(BaseContainer)`
  margin-bottom: 4rem;

  p {
    margin-bottom: 1.6rem;
  }

  > div:first-child {
    background-image: linear-gradient(60deg, #56d8ff 0%, #fff 100%);
    background-clip: text;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    h2 {
      font-size: 3.2rem;
      margin-bottom: 2rem;
    }
  }
`

export const SkillsContent = styled.div`
  width: 100%;
  box-shadow: 0 2px 10px black;

  padding: 4rem;

  border-radius: 8px;

  background: ${({ theme }) => theme['purple-dark-800']};

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 782px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`
