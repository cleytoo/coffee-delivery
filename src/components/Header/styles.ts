import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;

  nav {
    width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  button {
    border: 0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 14px;

    &:first-child {
      background-color: ${(p) => p.theme['purple-light']};
      color: ${(p) => p.theme['purple-dark']};
    }
    &:last-child {
      background-color: ${(p) => p.theme['yellow-light']};
      color: ${(p) => p.theme['yellow-dark']};
    }
  }
`
