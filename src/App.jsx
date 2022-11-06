import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Home} from './pages/home/home'
import {Tickets} from './pages/tickets/tickets'


export function App() {

  return (
    
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tickets' element={<Tickets />} />


    </Routes>
  </Router>
  
  )
}


