import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  color: ${cores.branco};
  display: block;
  height: 460px;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
