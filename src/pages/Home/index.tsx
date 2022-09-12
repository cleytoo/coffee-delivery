import { HomeContainer, InfoContainer, Info } from './styles'

import CoffeIllustration from '../../assets/coffe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const Home = () => {
  return (
    <HomeContainer>
      <div>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
          qualquer hora
        </p>

        <InfoContainer>
          <Info bg="#C47F17">
            <span>
              <ShoppingCart weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </Info>
          <Info bg=" #574F4D">
            <span>
              <Package weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </Info>
          <Info bg="#DBAC2C">
            <span>
              <Timer weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </Info>
          <Info bg="#8047F8">
            <span>
              <Coffee weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </Info>
        </InfoContainer>
      </div>

      <img src={CoffeIllustration} alt="" />
    </HomeContainer>
  )
}
