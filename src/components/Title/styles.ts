import styled from 'styled-components'
import { mediaQueries } from '../../base/breakpoints'
import { WHITE } from '../../base/colours'

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: ${WHITE};

  ${mediaQueries('ts')`
    font-size: 60px;
  `}
`
