import styled from 'styled-components'

export const ProjectContainer = styled.a`
  width: 19rem;

  position: relative;
  padding: 2rem;

  border-radius: 8px;

  outline: 0;
  transition: 0.7s;

  h4 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 1.8rem;
    font-weight: 400;

    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-500']};
    line-height: 1.5;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::after {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    inset: 0;
    z-index: -1;

    border-radius: 8px;

    background: rgba(255, 255, 255, 0.03);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @media (max-width: 768px) {
    width: 100%;

    &:hover {
      transform: scale(1.04);
    }
  }
`
