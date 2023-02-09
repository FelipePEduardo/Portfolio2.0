import { useEffect, useState } from 'react'
import { Project } from './components/project'
import { ProjetcsContainer, ProjetcsContent } from './styles'

interface repositoriesList {
  id: number
  name: string
  description: string
  html_url: string
}

export function Projects() {
  const [repositoriesList, setRepositoriesList] = useState<repositoriesList[]>(
    [],
  )

  async function repositories() {
    const response = await fetch(
      'https://api.github.com/users/FelipePEduardo/repos?sort=pushed&per_page=8',
    )
    const data = await response.json()
    setRepositoriesList(data)
  }

  useEffect(() => {
    repositories()
  }, [])

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
          {repositoriesList.map((respository) => {
            return <Project key={respository.id} onRespository={respository} />
          })}
        </div>
      </ProjetcsContent>
    </ProjetcsContainer>
  )
}
