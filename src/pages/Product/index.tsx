import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Game } from '../Home'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  {
    /*const test = useParams()*/
  }

  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setGame(resp))
  }, [id])

  if (!game) {
    return <h3>carregando...</h3>
  }

  return (
    <div>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game?.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game?.details.system} <br />
          <b>Desenvolvedor:</b> {game?.details.developer} <br />
          <b>Editora:</b> {game?.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {game?.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </div>
  )
}

export default Product
