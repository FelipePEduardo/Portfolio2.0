import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'
import {
  HomeContainer,
  HomeContent,
  ImageContainer,
  TextContainer,
} from './styles'

export function Home() {
  const { user } = useContext(ProfileContext)

  return (
    <HomeContainer>
      <HomeContent>
        <ImageContainer>
          <img src={`${user.html_url}.png`} alt="" />
        </ImageContainer>

        <TextContainer>
          <span>Seja bem-vindo(a)</span>

          <h1>Felipe Pereira Eduardo</h1>

          <p>Front-End Developer</p>
        </TextContainer>
      </HomeContent>
    </HomeContainer>
  )
}
