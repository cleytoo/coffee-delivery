import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.625rem 0;

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
  column-gap: 40px;
  row-gap: 20px;
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
