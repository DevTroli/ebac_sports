import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import Store from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={Store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={[]} estaNosFavoritos={[]} />
      </div>
    </Provider>
  )
}

export default App
