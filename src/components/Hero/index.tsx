import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreco } from '../ProductsList'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>{formataPreco(game.prices.old)} </span>
            )}
            {game.prices.current && (
              <>por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variant="primary"
              title="Clique aqui para adicionar ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
