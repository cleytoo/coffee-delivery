import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background-color: ${(p) => p.theme['base-button']};
  padding: 0.5rem;

  button {
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    svg {
      color: ${(p) => p.theme['purple-dark']};
    }
  }
`
