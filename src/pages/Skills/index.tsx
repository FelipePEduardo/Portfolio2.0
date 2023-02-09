import { Skill } from './components/Skill'
import { skills } from './data/skills'
import { SkillsContainer, SkillsContent } from './styles'

export function Skills() {
  return (
    <SkillsContainer>
      <SkillsContent>
        {skills.map((skill) => {
          return <Skill key={skill.id} skill={skill} />
        })}
      </SkillsContent>
    </SkillsContainer>
  )
}
