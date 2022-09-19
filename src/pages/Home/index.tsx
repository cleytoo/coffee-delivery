import {
  HomeContainer,
  InfoContainer,
  Info,
  ListCoffeeContainer,
} from './styles'

import CoffeIllustration from '../../assets/coffe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { coffeeList } from '../../constants/coffeeList'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useState } from 'react'

export const Home = () => {
  const [coffees, setCoffees] = useState(() => {
    const coffees = coffeeList.map((coffee) => ({ ...coffee, quantity: 0 }))
    return coffees
  })

  const plusCoffee = (name: string) => {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.name === name) {
          return { ...coffee, quantity: coffee.quantity + 1 }
        } else {
          return coffee
        }
      })
    )
  }
  const minusCoffee = (name: string) => {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.name === name && coffee.quantity > 0) {
          return { ...coffee, quantity: coffee.quantity-- }
        } else {
          return coffee
        }
      })
    )
  }

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

      <ListCoffeeContainer>
        <h1>Nossos cafés</h1>
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              coffee={coffee}
              plus={() => plusCoffee(coffee.name)}
              minus={() => minusCoffee(coffee.name)}
            />
          ))}
        </div>
      </ListCoffeeContainer>
    </HomeContainer>
  )
}
