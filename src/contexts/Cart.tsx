import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Coffee } from '../constants/coffeeList'

interface CartProps {
  coffees: Coffee[]
  AddCoffeeInCart: (coffee: Coffee) => void
}

const CartContext = createContext({} as CartProps)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [coffees, setCoffes] = useState<Coffee[]>([])

  const AddCoffeeInCart = (coffee: Coffee) => {
    const item = { ...coffee }

    if (item.quantity === 0) {
      item.quantity = 1
    }

    setCoffes((state) => [...state, item])
    toast.success(`Foi adicionado ${item.name}(x${item.quantity})`)
  }

  return (
    <CartContext.Provider value={{ coffees, AddCoffeeInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
