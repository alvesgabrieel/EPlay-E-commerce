import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

//const promocoes: Game[] = []

//const emBreve: Game[] = []

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  //const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  //const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  //const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  //const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  //const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  //useEffect(() => {
  //  fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //   .then((res) => res.json())
  // .then((res) => setGamesAcao(res))

  // fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  // .then((res) => res.json())
  //.then((res) => setGamesEsportes(res))

  //fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //.then((res) => res.json())
  //.then((res) => setGamesSimulacao(res))

  //fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //.then((res) => res.json())
  //.then((res) => setGamesLuta(res))

  //fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //.then((res) => res.json())
  //.then((res) => setGamesRPG(res))
  //}, [])

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Games de ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Games de esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Games de simulacao"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Games de luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="Games de RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }
  return <h4>carregando....</h4>
}

export default Categories
