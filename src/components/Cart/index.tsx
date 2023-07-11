import Button from '../Button'
import * as S from './styles'

import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const toCloseCart = () => {
    dispatch(closeCart())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={toCloseCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogos no carrinho</S.Quantity>
        <S.Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar a compra" type="button">
          Continuar a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart