import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Title from './components/Title'
import Button from './components/Button'
import Container from './components/Container'

export default function App() {
  const GlobalStyles = createGlobalStyle
  `
    ${normalize}
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
    }
  `

  return (
    <>
      <GlobalStyles />
      <Container>
        <Title />
        <Button onClick={() => console.log("Clicked Button")} text='Example Button'/>
      </Container>
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </>
  );
}
