import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  plus: () => void
  minus: () => void
}

export const Counter = ({ quantity, plus, minus }: CounterProps) => {
  return (
    <CounterContainer>
      <button onClick={plus}>
        <Plus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={minus}>
        <Minus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
