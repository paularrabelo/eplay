import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    system: 'Windows',
    infos: ['R$ 250,00', '10%'],
    image: resident
  },
  {
    id: 2,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    system: 'PS5',
    infos: ['R$ 290,00', '5%'],
    image: diablo
  },
  {
    id: 3,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Zelda',
    system: 'Windows',
    infos: ['R$ 250,00', '10%'],
    image: zelda
  },
  {
    id: 4,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['R$ 250,00', '10%'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    system: 'Windows',
    infos: ['28/01'],
    image: resident
  },
  {
    id: 6,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    system: 'PS5',
    infos: ['11/02'],
    image: diablo
  },
  {
    id: 7,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Zelda',
    system: 'Windows',
    infos: ['12/03'],
    image: zelda
  },
  {
    id: 8,
    category: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promocoes" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
