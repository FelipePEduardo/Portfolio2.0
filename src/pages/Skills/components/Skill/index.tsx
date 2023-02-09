import { SkillContainer } from './styles'

interface skillProps {
  skill: {
    id: number
    title: string
  }
}

export function Skill({ skill }: skillProps) {
  return (
    <SkillContainer>
      <span>{skill.title}</span>
    </SkillContainer>
  )
}
