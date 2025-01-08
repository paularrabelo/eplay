import Tag from '../Tag'
import { CardContainer, Paragrafo, Titulo } from './styles'

const Product = () => (
  <CardContainer>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea
      necessitatibus vel repellat illo dolore. Quia sunt sed velit. Est rerum
      accusantium saepe repudiandae nemo a officiis molestias, sunt odit?
    </Paragrafo>
  </CardContainer>
)

export default Product
