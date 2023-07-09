
import './App.css';
import './first_add/firstaddition.css';
import './second_add/secondadd.css';
import './table_search_persons/fromtable.css';
import './layoutt/layoutt.css';
import './storage/Storage.css';
import './authenticationn/authentication.css';
import { Routes,Route,BrowserRouter  } from 'react-router-dom';
function App() {
  return (
    <div dir='rtl' className="App">
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
