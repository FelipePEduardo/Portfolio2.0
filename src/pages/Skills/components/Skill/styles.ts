import styled from 'styled-components'

export const SkillContainer = styled.div`
  max-width: 32rem;

  text-align: center;

  padding: 2.1rem;

  border-radius: 8px;

  background: ${(props) => props.theme['gray-500']};

  span {
    font-size: 1.8rem;
    font-weight: bold;
  }

  &:hover {
    background: ${(props) => props.theme['pink-200']};
    transition: 0.2s;
  }

  @media (max-width: 560px) {
    width: 19rem;
  }
`
