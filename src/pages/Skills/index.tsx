import { Courses } from '../../components/Courses'
import { Skill } from './components/Skill'
import { skills } from './data/skills'
import {
  Container,
  CoursesContent,
  SkillsContainer,
  SkillsContent,
} from './styles'

export function Skills() {
  return (
    <Container>
      <CoursesContent>
        <div>
          <h2>Cursos</h2>
        </div>
        <p>
          Estes são os cursos que fiz. Em 2022 foi o ano que comecei minha
          jornada no Explorer e atualmente estou no Ignite!
        </p>
        <div>
          <Courses />
        </div>
      </CoursesContent>

      <SkillsContainer>
        <div>
          <h2>Habilidades</h2>
        </div>
        <p>
          Essas são algumas das habilidades que aprendendo e desenvolvendo nos
          meu projetos mais recentes.
        </p>
        <SkillsContent>
          {skills.map((skill) => {
            return <Skill key={skill.id} skill={skill} />
          })}
        </SkillsContent>
      </SkillsContainer>
    </Container>
  )
}
