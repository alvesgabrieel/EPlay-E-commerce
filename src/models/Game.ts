class Game {
  id: number
  title: string
  category: string
  description: string
  image: string
  infos: string[]
  system: string

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
  }
}

export default Game
