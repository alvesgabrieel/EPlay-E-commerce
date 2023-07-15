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
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
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

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Games de ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Games de esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulationGames}
        title="Games de simulacao"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="Games de luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="Games de RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories
