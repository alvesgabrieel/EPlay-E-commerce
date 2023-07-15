import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  //const [promocoes, setPromocoes] = useState<Game[]>([])
  //const [emBreve, setEmBreve] = useState<Game[]>([])
  //useEffect(() => {
  // fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
  //  .then((res) => res.json())
  //  .then((res) => setPromocoes(res))

  // fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
  //   .then((res) => res.json())
  //  .then((res) => setEmBreve(res))
  // }, [])

  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
