import { Container } from '@mui/material'
import './App.css'
import PropertyApp from './PropertyApp'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Container>
      <Header></Header>
      <PropertyApp></PropertyApp>
      <Footer></Footer>
    </Container>
  )
}

export default App
