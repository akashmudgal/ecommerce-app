import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<div>Shop</div>} />
        <Route path="contact" element={<div>Contact</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path='auth' element={<Authentication/>} />
      </Route>
    </Routes>
  )
}

export default App;
