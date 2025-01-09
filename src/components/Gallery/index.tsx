import starWars from '../../assets/images/star_wars.png'
import Section from '../Section'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={starWars} alt="Jedi Star Wars" />
      </Item>
      <Item>
        <img src={starWars} alt="Jedi Star Wars" />
      </Item>
      <Item>
        <img src={starWars} alt="Jedi Star Wars" />
      </Item>
      <Item>
        <img src={starWars} alt="Jedi Star Wars" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
