import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  display: flex;
  gap: 2rem;
`

const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    /* margin-bottom: 1rem; */
  }
`

export const CompleteCheckout = styled(CommonContainer)`
  width: 40rem;
`

export const SelectedCoffees = styled(CommonContainer)`
  width: 28rem;
`

export const Address = styled.div`
  height: 23.25rem;
  background-color: ${(p) => p.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(p) => p.theme['yellow-dark']};
    }

    div {
      p {
        font-size: 1rem;
        color: ${(p) => p.theme['base-subtitle']};
        line-height: 20.8px;
      }
      span {
        font-size: 0.875rem;
        color: ${(p) => p.theme['base-text']};
        line-height: 18.2px;
      }
    }
  }

  form {
    /* border: 1px solid red; */
    max-width: 560px;
    margin-top: 2rem;
    display: grid;
    grid-template-areas:
      'CEP CEP CEP'
      'RUA RUA RUA'
      'NUMERO COMPLEMENTO COMPLEMENTO'
      'BAIRRO CIDADE UF';
    row-gap: 1rem;
    column-gap: 12px;

    input {
      height: 2.625rem;
      padding: 0.75rem;
      background-color: ${(p) => p.theme['base-input']};
      border: 1px solid ${(p) => p.theme['base-button']};
      border-radius: 4px;
      font-size: 0.875rem;
      color: ${(p) => p.theme['base-label']};
    }

    input:nth-child(1) {
      grid-area: CEP;
      width: 200px;
    }
    input:nth-child(2) {
      grid-area: RUA;
    }
    input:nth-child(3) {
      grid-area: NUMERO;
    }
    input:nth-child(4) {
      grid-area: COMPLEMENTO;
    }
    input:nth-child(7) {
      grid-area: UF;
      width: 80px;
    }
  }
`

export const Payments = styled.div`
  height: 12.938rem;
  background-color: ${(p) => p.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(p) => p.theme['purple-dark']};
    }

    div {
      p {
        font-size: 1rem;
        color: ${(p) => p.theme['base-subtitle']};
        line-height: 20.8px;
      }
      span {
        font-size: 0.875rem;
        color: ${(p) => p.theme['base-text']};
        line-height: 18.2px;
      }
    }
  }
`

export const PaymentButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    display: flex;
    min-width: 178px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 1rem;
    font-size: 12px;
    border: 0;
    background-color: ${(p) => p.theme['base-button']};
    color: ${(p) => p.theme['base-text']};
    border-radius: 6px;

    svg {
      color: ${(p) => p.theme['purple-dark']};
      margin-right: 12px;
    }
  }
`

export const Order = styled.div`
  height: 31.25rem;
  background-color: ${(p) => p.theme['base-card']};
  padding: 2.5rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`
