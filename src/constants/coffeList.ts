export interface Coffe {
  src: string
  categories: String[]
  name: string
  description: string
  amountValue: number
}

import ExpressoTra from '../assets/imgs/Expresso.png'
import ExpressoAmericano from '../assets/imgs/Americano.png'
import ExpressoCremoso from '../assets/imgs/Expresso-Cremoso.png'
import CafeGelado from '../assets/imgs/Café-Gelado.png'
import CafeComLeite from '../assets/imgs/Café-com-Leite.png'
import Latte from '../assets/imgs/Latte.png'
import Capuccino from '../assets/imgs/Capuccino.png'
import Macchiato from '../assets/imgs/Macchiato.png'
import Mochaccino from '../assets/imgs/Mochaccino.png'
import ChocolateQuente from '../assets/imgs/Chocolate-Quente.png'
import Cubano from '../assets/imgs/Cubano.png'
import Havaiano from '../assets/imgs/Havaiano.png'
import Arabe from '../assets/imgs/Arabe.png'
import Irlandes from '../assets/imgs/Irlandês.png'

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
  {
    src: ExpressoCremoso,
    name: 'Expresso Cremoso',
    categories: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    amountValue: 9.9,
  },
  {
    src: CafeGelado,
    name: 'Expresso Gelado',
    categories: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    amountValue: 9.9,
  },
  {
    src: CafeComLeite,
    name: 'Café com leite',
    categories: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    amountValue: 9.9,
  },
  {
    src: Latte,
    name: 'Latte',
    categories: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    amountValue: 9.9,
  },
  {
    src: Capuccino,
    name: 'Capuccino',
    categories: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    amountValue: 9.9,
  },
  {
    src: Macchiato,
    name: 'Macchiato',
    categories: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    amountValue: 9.9,
  },
  {
    src: Mochaccino,
    name: 'Mocaccino',
    categories: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    amountValue: 9.9,
  },
  {
    src: ChocolateQuente,
    name: 'Chocolate Quente',
    categories: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    amountValue: 9.9,
  },
  {
    src: Cubano,
    name: 'Cubano',
    categories: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    amountValue: 9.9,
  },
  {
    src: Havaiano,
    name: 'Havaiano',
    categories: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    amountValue: 9.9,
  },
  {
    src: Arabe,
    name: 'Árabe',
    categories: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    amountValue: 9.9,
  },
  {
    src: Irlandes,
    name: 'Irlandês',
    categories: ['especial'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    amountValue: 9.9,
  },
]
