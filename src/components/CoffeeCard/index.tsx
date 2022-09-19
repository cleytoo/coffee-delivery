import { ShoppingCartSimple } from 'phosphor-react'
import { Coffee } from '../../constants/coffeeList'
import { useCart } from '../../contexts/Cart'
import { currency } from '../../utils/currency'
import { Counter } from '../Counter'
import { AddButton, CoffeeCardContainer, CoffeePrice } from './styles'

interface CoffeCardProps {
  coffee: Coffee
  plus: () => void
  minus: () => void
}

export const CoffeeCard = ({ coffee, plus, minus }: CoffeCardProps) => {
  const { AddCoffeeInCart } = useCart()
  return (
    <CoffeeCardContainer>
      <img src={coffee.src} alt="" />
      <div>
        {coffee.categories.map((category, index) => (
          <span key={index}>{category}</span>
        ))}
      </div>

      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>

      <footer>
        <CoffeePrice>
          <strong>{currency(coffee.amountValue)}</strong>
        </CoffeePrice>
        <Counter quantity={coffee?.quantity || 0} plus={plus} minus={minus} />
        <AddButton onClick={() => AddCoffeeInCart(coffee)}>
          <ShoppingCartSimple size={22} weight="fill" />
        </AddButton>
      </footer>
    </CoffeeCardContainer>
  )
}
