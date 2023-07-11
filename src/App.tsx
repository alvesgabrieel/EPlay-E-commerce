import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
