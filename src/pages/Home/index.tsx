import { useState, useEffect } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

//const promocoes: Game[] = [
//]

//const emBreve: Game[] = [
//]

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

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

  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
