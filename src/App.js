
import './App.css';
import './first_add/firstaddition.css';
import './second_add/secondadd.css';
import './table_search_persons/fromtable.css';
import './layoutt/layoutt.css';
import './storage/Storage.css';
import './authenticationn/authentication.css';
import { Routes,Route,BrowserRouter  } from 'react-router-dom';
import FirstAdditionPerson from './first_add/FirstAdditionPerson';
import MianSecondAdition from './second_add/MainSecondAddition';
import SearchPersonfromTable from './table_search_persons/SearchPersonfromTable';
import MainStorage from './storage/MainStorage';
import McStorage from './storage/McStorage';
import BcStorage from './storage/BcStorage'
import UserAccont from './authenticationn/UserAccont';
import SalesClinic from './thesales/SalesClinic';
import Singup from './authenticationn/Singup';
import Update from './authenticationn/Update';
import MainDashbord from './dashbord_cllinic_eyes/MainDashbord';
import Login from './authenticationn/Login';
import AuthProvider from './authContext/AuthContext';
import RequireAuth from './authContext/RequireAuth';
function App() {
  return (
    <div dir='rtl' className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashbord' element={<RequireAuth><MainDashbord/></RequireAuth>}>
          <Route path='adduser' element={<RequireAuth><FirstAdditionPerson/></RequireAuth>}/>
          <Route path='search' element={<RequireAuth><SearchPersonfromTable/></RequireAuth>}/>
          <Route path='search/:id' element={<RequireAuth><MianSecondAdition/></RequireAuth>}/>
          <Route path='store' element={<RequireAuth><MainStorage/></RequireAuth>}/>
          <Route path='m.c' element={<RequireAuth><McStorage/></RequireAuth>}/>
          <Route path='b.c' element={<RequireAuth><BcStorage/></RequireAuth>}/>
          <Route path='user' element={<RequireAuth><UserAccont/></RequireAuth>}/>
          <Route path='adminpage' element={<RequireAuth><SalesClinic/></RequireAuth>}/>
          <Route path='signup' element={<RequireAuth><Singup/></RequireAuth>}/>
          <Route path='update-profile' element={<RequireAuth><Update/></RequireAuth>}/>
          </Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
