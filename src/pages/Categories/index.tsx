import { useEffect, useState } from 'react'

import { Game } from '../Home'

import ProductsList from '../../components/ProductsList'

//const promocoes: Game[] = []

//const emBreve: Game[] = []

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Games de ação" background="gray" />
      <ProductsList
        games={gamesEsportes}
        title="Games de esportes"
        background="black"
      />
      <ProductsList
        games={gamesSimulacao}
        title="Games de simulacao"
        background="gray"
      />
      <ProductsList
        games={gamesLuta}
        title="Games de luta"
        background="black"
      />
      <ProductsList games={gamesRPG} title="Games de RPG" background="gray" />
    </>
  )
}

export default Categories
