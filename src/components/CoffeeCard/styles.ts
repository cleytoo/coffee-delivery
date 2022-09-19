import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme['base-card']};
  width: 16rem;
  height: 19.375rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    height: 120px;
    width: 120px;
    margin-top: -20px;
  }

  > div {
    display: flex;
    gap: 4px;
    margin-top: 12px;
    margin-bottom: 20px;

    span {
      padding: 4px 8px;
      font-size: 10px;
      font-weight: bold;
      border-radius: 10px;
      text-transform: uppercase;
      background-color: ${(p) => p.theme['yellow-light']};
      color: ${(p) => p.theme['yellow-dark']};
    }
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 26px;
    color: ${(p) => p.theme['base-subtitle']};
  }

  p {
    font-size: 12px;
    color: ${(p) => p.theme['base-label']};
    line-height: 18.2px;
    text-align: center;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    margin-bottom: 20px;
  }
`

export const CoffeePrice = styled.p`
  font-size: 0.875rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(p) => p.theme['base-text']};
  }
`

export const AddButton = styled.button`
  border-radius: 6px;
  padding: 0.4rem;
  border: 0px;
  background-color: ${(p) => p.theme['purple-dark']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(p) => p.theme['white']};
  }
`
