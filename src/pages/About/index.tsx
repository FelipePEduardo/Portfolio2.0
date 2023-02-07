import {
  AboutContainer,
  AboutContent,
  ImageAboutContainer,
  AboutMeContainer,
} from './styles'
import myImage2 from '../../assets/Felipe.jpeg'

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <div>
          <ImageAboutContainer>
            <img src={myImage2} alt="" />
          </ImageAboutContainer>

          <AboutMeContainer>
            <div>
              <h1>Sobre mim</h1>
            </div>

            <p>
              Me chamo <em>Felipe Pereira Eduardo</em> , tenho 21 anos e moro em
              Santo André, São Paulo.
              <br />
              <br />
              Minha conexão com desenvolvimento começou pelo Discover da{' '}
              <em>Rocketseat</em>, migrei para o Explorer onde pude me desafiar
              ainda mais e logo depois ganhei uma bolsa para cursar o{' '}
              <em>Ignite</em> onde estudo atualmente tenho o foco em{' '}
              <strong>Desenvolvimento Front-End</strong> com <em>ReactJS</em> .
              Busco me tornar um desenvolvedor Full-Stack.
            </p>
          </AboutMeContainer>
        </div>

        <h2>Bio</h2>

        <div>
          <blockquote>
            Desenvolvedor Front-End React no caminho para o primeiro trabalho na
            área! Estudante do Ignite na Rocketseat.
          </blockquote>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}
