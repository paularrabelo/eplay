import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : cores.branco};
  color: ${cores.branco};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : 'transparent')};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
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
