import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { openCart } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const toOpenCart = () => {
    dispatch(openCart())
  }

  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="eplay" />
        </Link>
        <nav>
          <S.Links>
            <S.LinksItem>
              <Link to="/categories">Categorias</Link>
            </S.LinksItem>
            <S.LinksItem>
              <a href="#">Novidades</a>
            </S.LinksItem>
            <S.LinksItem>
              <a href="#">Promoções</a>
            </S.LinksItem>
          </S.Links>
        </nav>
      </div>
      <S.LinksCart onClick={toOpenCart} href="#">
        {items.length} - produto(s)
        <img src={carrinho} alt="carrinho" />
      </S.LinksCart>
    </S.HeaderBar>
  )
}

export default Header
