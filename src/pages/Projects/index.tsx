import { Project } from './components/project'
import { ProjetcsContainer, ProjetcsContent } from './styles'

export function Projects() {
  return (
    <ProjetcsContainer>
      <ProjetcsContent>
        <div>
          <h1>Projetos</h1>
        </div>
        <p>
          Essa página lista os principais projetos que venho desenvolvendo
          durante a minha jornada como programador.
        </p>

        <div>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </ProjetcsContent>
    </ProjetcsContainer>
  )
}
