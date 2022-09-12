import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsContainer, HeaderContainer } from './styles'

import CoffeeDeliverylogo from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={CoffeeDeliverylogo} alt="" />
        <ActionsContainer>
          <button>
            <MapPin size={22} weight="fill" />
            Londrina, PR
          </button>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
