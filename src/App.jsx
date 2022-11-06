import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Home} from './pages/home/home';
import {Tickets} from './pages/tickets/tickets';
import {TelaTv} from './pages/tv/tvPage'
import {Rate} from './pages/rate/rate'
 

export function App() {

  return (
    
    <Router>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/tickets' element={<Tickets />}/>
      <Route path='/rate' element={<Rate/>}/>
      <Route path='/TelaTv' element={<TelaTv />}/>
        
    </Routes>
  </Router>
  
  )
}


