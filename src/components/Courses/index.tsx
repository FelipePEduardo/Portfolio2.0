import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from './styles'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export function Courses() {
  return (
    <AccordionRoot type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Ignite - Rocketseat
          <ChevronDownIcon className="AccordionChevron" />
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            Programa focado na especialização de stacks como ReactJS utilizando
            ferramentas como Next.js, TypeScript, Context Api, React Hooks,
            Styled-Components, Stitches e outras coisas.
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Explorer - Rocketseat
          <ChevronDownIcon className="AccordionChevron" />
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            Programa da Rocketseat focado em formar e desenvolver habilidades
            técnicas e comportamentais com foco na primeira oportunidade como
            programador. <br />
            <br />
            Conteúdos técnicos abordados: <br />
            - HTML e CSS <br />
            - JavaScript <br />
            - Git e GitHub <br />
            - Node.js <br />
            - ReactJS <br />
            - APIs <br />
            - Deploy <br />- Desafio final &#40;Desenvolvimento de um Cardápio
            Digital utilizando os conceitos técnicos abordados no decorrer da
            formação&#41;.
          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}
