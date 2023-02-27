import {
  AboutContainer,
  AboutContent,
  BackgroundTitle,
  ImageAboutContainer,
  InfoContainer,
} from './styles'
import myImage2 from '../../assets/Felipe.jpeg'
import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'

export function About() {
  const { user } = useContext(ProfileContext)

  return (
    <AboutContainer>
      <AboutContent>
        <div>
          <BackgroundTitle>
            <h1>Sobre mim</h1>
          </BackgroundTitle>

          <InfoContainer>
            <ImageAboutContainer>
              <img src={myImage2} alt="" />
            </ImageAboutContainer>

            <p>
              Me chamo <em>Felipe Pereira Eduardo</em> , tenho 21 anos e moro em
              Santo André, São Paulo.
              <br />
              <br />
              Minha conexão com desenvolvimento começou pelo Discover da{' '}
              <em>Rocketseat</em>, migrei para o Explorer onde pude me desafiar
              ainda mais e logo depois ganhei uma bolsa para cursar o{' '}
              <em>Ignite</em> onde estudo atualmente e tenho o foco em{' '}
              <strong>Desenvolvimento Front-End</strong> com <em>ReactJS</em> .
              Busco me tornar um desenvolvedor Full-Stack.
            </p>
          </InfoContainer>
        </div>

        <h2>Bio</h2>

        <div>
          <blockquote>{user.bio}</blockquote>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}
