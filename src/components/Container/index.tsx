import * as Styles from './styles'

export interface ContainerProps {
  children: any
}

export default function Container({ children }: ContainerProps) {
  return <Styles.Container>{children}</Styles.Container>
}