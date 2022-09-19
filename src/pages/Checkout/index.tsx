import { Bank, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import {
  Address,
  CheckoutContainer,
  CompleteCheckout,
  Order,
  PaymentButtons,
  Payments,
  SelectedCoffees,
} from './styles'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CompleteCheckout>
        <h1>Complete seu pedido</h1>
        <Address>
          <header>
            <MapPinLine size={22} weight="regular" />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>
          <form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </Address>
        <Payments>
          <header>
            <CurrencyDollar size={22} weight="regular" />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>
          <PaymentButtons>
            <button>
              <CurrencyDollar size={16} />
              cartão de crédito
            </button>
            <button>
              <Bank size={16} />
              cartão de débito
            </button>
            <button>
              <Money size={16} />
              dinheiro
            </button>
          </PaymentButtons>
        </Payments>
      </CompleteCheckout>
      <SelectedCoffees>
        <h1>Cafés selecionados</h1>
        <Order></Order>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
