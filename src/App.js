
import './App.css';
import './dashbord_cllinic_eyes/first_add/firstaddition.css';
import './dashbord_cllinic_eyes/second_add/secondadd.css';
import './dashbord_cllinic_eyes/table_search_persons/fromtable.css';
import './dashbord_cllinic_eyes/layoutt/layoutt.css';
import './dashbord_cllinic_eyes/storage/Storage.css';
import './dashbord_cllinic_eyes/authenticationn/authentication.css';
import AuthContext from './dashbord_cllinic_eyes/authenticationn/authContext/AuthContext'
import RequireAuth from './dashbord_cllinic_eyes/authenticationn/authContext/RequireAuth'
import MainDashbord from './dashbord_cllinic_eyes/MainDashbord'
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
