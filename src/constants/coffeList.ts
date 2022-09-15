export interface Coffe {
  src: string
  categories: String[]
  name: string
  description: string
  amountValue: number
}

import ExpressoTra from '../assets/imgs/Expresso.png'
import ExpressoAmericano from '../assets/imgs/Americano.png'

export const coffeList: Coffe[] = [
  {
    src: ExpressoTra,
    categories: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    amountValue: 9.9,
  },
  {
    src: ExpressoAmericano,
    categories: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    amountValue: 9.9,
  },
]
