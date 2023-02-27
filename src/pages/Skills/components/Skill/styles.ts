import styled from 'styled-components'

export const SkillContainer = styled.div`
  max-width: 32rem;

  text-align: center;

  padding: 2.1rem;

  border-radius: 8px;

  background: ${({ theme }) => theme['violet-400']};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.8);

  span {
    font-size: 1.8rem;
    font-weight: bold;
  }

  &:hover {
    background: ${({ theme }) => theme['violet-600']};
    transform: scale(1.1);
    transition: 0.2s;
  }

  @media (max-width: 560px) {
    width: 19rem;
  }
`
