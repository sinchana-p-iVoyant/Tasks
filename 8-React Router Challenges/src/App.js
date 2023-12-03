import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { ContactUs } from './components/ContactUs';
import { NoMatch } from './components/NoMatch';
import { Mens } from './components/Mens';
import { Womens } from './components/Womens';
import { Kids } from './components/Kids';
import { MensProductDetails } from './components/MensProductDetails';
import { WomensProductDetails } from './components/WomensProductDetails';
import { KidsProductDetails } from './components/KidsProductDetails';
import { Login } from './components/Login';
import { Profile } from './components/Profile';

function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> }/> 

      <Route path='/products' element={ <Products /> }>
          <Route index element={ <Mens /> } />

          <Route path='mens' element={ <Mens /> } />
          <Route path='mens/:mensId' element={ <MensProductDetails /> } />

          <Route path='womens' element={ <Womens /> } />
          <Route path='womens/:womensId' element={ <WomensProductDetails /> } />

          <Route path='kids' element={ <Kids /> } />
          <Route path='kids/:kidsId' element={ <KidsProductDetails /> } />

      </Route>
      <Route path='products/:mensId' element={ <MensProductDetails /> } />

      <Route path='/login' element={ <Login /> } />
      <Route path='/profile/:name' element={ <Profile /> } />

      <Route path='/contactUs' element={ <ContactUs /> } />
      <Route path='*' element={ <NoMatch /> } />
    </Routes>
   </>
  );
}

export default App;
