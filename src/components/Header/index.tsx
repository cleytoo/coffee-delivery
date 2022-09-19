import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsContainer, HeaderContainer } from './styles'

import CoffeeDeliverylogo from '../../assets/Logo.svg'
import { useCart } from '../../contexts/Cart'
import { Link } from 'react-router-dom'

export const Header = () => {
  const { coffees } = useCart()

  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <img src={CoffeeDeliverylogo} alt="" />
        </Link>
        <ActionsContainer>
          <button>
            <MapPin size={22} weight="fill" />
            Londrina, PR
          </button>
          <Link to="checkout">
            <button>
              {coffees.length > 0 && <span>{coffees.length}</span>}
              <ShoppingCart size={22} weight="fill" />
            </button>
          </Link>
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
