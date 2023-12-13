import './App.css';
import Dropdown from './dropdown';

function App() {
  const itemarray=['option1','option2','option3'];
   

  return (
    <div >
      <h1>Dropdown Example</h1>
         <Dropdown itemarray={itemarray}/>
    
    </div>
  );
}

export default App;
