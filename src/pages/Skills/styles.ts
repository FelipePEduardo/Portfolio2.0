import styled from 'styled-components'

export const SkillsContainer = styled.section`
  width: 100%;
  max-width: 112rem;
  padding: 0 2.5rem;
  margin: 12rem auto 20rem;
`

export const SkillsContent = styled.div`
  width: 100%;

  padding: 4rem;

  border-radius: 8px;

  background: ${(props) => props.theme['purple-800']};

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
