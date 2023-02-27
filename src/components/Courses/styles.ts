import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

export const AccordionRoot = styled(Accordion.Root)`
  width: 70%;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-dark-800']};
  box-shadow: 0 2px 10px #09070b;

  > div + div {
    border-top: 1px solid #1b1520;
  }
`

export const AccordionItem = styled(Accordion.Item)`
  &:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px #a78bfa;
  }
`

export const AccordionTrigger = styled(Accordion.Trigger)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  color: ${({ theme }) => theme['gray-100']};

  border: 0;
  padding: 2rem;

  font-size: 1.8rem;
  font-style: italic;
  text-decoration: underline;

  .AccordionChevron {
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='open'] > .AccordionChevron {
    transform: rotate(180deg);
  }
`

export const AccordionContent = styled(Accordion.Content)`
  background-color: ${({ theme }) => theme['purple-dark-700']};

  overflow: hidden;

  .AccordionContentText {
    padding: 2rem;
  }

  &[data-state='open'] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`
