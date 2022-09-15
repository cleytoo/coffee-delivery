import {
  HomeContainer,
  InfoContainer,
  Info,
  CoffeContainer,
  CoffeCardContainer,
} from './styles'

import CoffeIllustration from '../../assets/coffe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Coffe, coffeList } from '../../constants/coffeList'

export const Home = () => {
  return (
    <HomeContainer>
      <div>
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
      </div>

      <CoffeContainer>
        <h1>Nossos cafés</h1>
        <div>
          {coffeList.map((coffe) => (
            <CoffeCard coffe={coffe} />
          ))}
        </div>
      </CoffeContainer>
    </HomeContainer>
  )
}

interface CoffeCardProps {
  coffe: Coffe
}

const CoffeCard = ({ coffe }: CoffeCardProps) => {
  return (
    <CoffeCardContainer>
      <img src={coffe.src} alt="" />
      <div>
        {coffe.categories.map((category, index) => (
          <span key={index}>{category}</span>
        ))}
      </div>

      <strong>{coffe.name}</strong>
      <p>{coffe.description}</p>
      <div>
        <p>R$ 10,00</p>
        <button></button>
      </div>
    </CoffeCardContainer>
  )
}
