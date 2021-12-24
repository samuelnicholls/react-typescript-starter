import styled from 'styled-components'
import { DARK_BLUE } from '../../base/colours'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
  background-color: ${DARK_BLUE};
`