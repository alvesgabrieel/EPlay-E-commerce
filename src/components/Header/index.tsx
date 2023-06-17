import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
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
    <S.LinksCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </S.LinksCart>
  </S.HeaderBar>
)

export default Header
