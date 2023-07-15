import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { openCart } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toOpenCart = () => {
    dispatch(openCart())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="eplay" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  title="Clique aqui para acessar a sessao de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique para acessar a seção de Promoções"
                  to="#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={toOpenCart}>
          {items.length} <span> - produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>

      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinksItem>
            <Link
              title="Clique aqui para acessar a sessao de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique para acessar a seção de Promoções"
              to="#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
