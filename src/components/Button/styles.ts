import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '../Tag'

export const ButtonContainer = styled.button<Props>`
  background-color: transparent;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
