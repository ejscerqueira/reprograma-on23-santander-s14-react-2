import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Search } from './components/Search'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meu github search" />
      <Bio content=" Eu sou Emília Jordana Cerqueira, mãe de 3 pirralhes ,amo animais e a natureza.

Não recuso um dia no mato e você nunca irá me encontrar em um shopping.

Estudei ate o 6 semestre de serviço social mas me descobrir apaixonada por tecnologia. A tecnologia me empodera e eu não vejo a hora de me tornar uma Desenvolvedora. />
      <Search />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App