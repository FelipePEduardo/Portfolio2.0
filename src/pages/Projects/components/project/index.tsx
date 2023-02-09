import { ProjectContainer } from './styles'

interface onRespositoryProps {
  onRespository: {
    name: string
    description: string
    html_url: string
  }
}

export function Project({ onRespository }: onRespositoryProps) {
  return (
    <ProjectContainer href={onRespository.html_url} target="_blank">
      <div>
        <h4>{onRespository.name}</h4>
        <p>{onRespository.description}</p>
      </div>
    </ProjectContainer>
  )
}
