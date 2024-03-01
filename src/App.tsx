import './App.css'
import Debounce from './components/debounce';
import Memoize from './components/memoize';
import Throttle from './components/throttle';


function App() {
 
  

  return (
   <div className='App'>
    <Memoize></Memoize>
    <Throttle></Throttle>
    <Debounce></Debounce>      
   </div>
  )
}

export default App
