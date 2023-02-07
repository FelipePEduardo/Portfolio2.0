import {
  HomeContainer,
  HomeContent,
  ImageContainer,
  TextContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <ImageContainer>
          <img src="https://github.com/FelipePEduardo.png" alt="" />
        </ImageContainer>

        <TextContainer>
          <span>Seja bem-vindo(a)</span>
          <div>
            <h1>Felipe Pereira Eduardo</h1>
          </div>
          <p>Front-End Developer</p>
        </TextContainer>
      </HomeContent>
    </HomeContainer>
  )
}
