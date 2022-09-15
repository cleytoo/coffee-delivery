import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    padding: 5.625rem 0;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 62.4px;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 26px;
    font-size: 1.25rem;
  }
`

export const InfoContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`

export const Info = styled.div<{ bg: string }>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  p {
    font-size: 1rem;
    color: ${(p) => p.theme['base-text']};
  }

  span {
    height: 2rem;
    min-width: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(p) => p.theme.white};
    background-color: ${(p) => p.bg};
  }
`

export const CoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
  }

  > div {
    display: grid;
    flex-direction: colu;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`

export const CoffeCardContainer = styled.div`
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
`
