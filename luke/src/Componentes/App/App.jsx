import Droides from '../Droides/Droides';
import './App.css';
import IdDroides from '../Droides/iddroide';
import DetalleDroide from '../Droides/DetalleDroide';
import { Link, Route, Routes } from 'react-router-dom';
import Error from '../Error/Error';


function App() {

  return (
    <> 
    <h1 className='titulo'>API Luke</h1>
    <Droides/>
    
    
    {/* esto tiene que llevar el mismo nombre de nuestra ruta */}
    <Routes>
      
        
      <Route path='/detalle' element={<DetalleDroide/>}/>
      <Route path='/buscar/droide' element={<IdDroides/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    
    </>
      
  )
}

export default App
