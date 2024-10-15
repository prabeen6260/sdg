import MainPage from './components/main-page/mainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from './components/login/login';
// import Register from './components/login/register';
import { CreateBlog } from './components/blogs/createBlog';
import { FlightCarbonCalculator} from './components/calculator/flightCarbonCalculator';
import { EcommerceCarbonCalculator } from './components/calculator/ecommerceCarbonCalculator';
import { Shop } from './components/shop/shop';
import { HashRouter } from 'react-router-dom';

function App() {

  return (
      <div>
        <HashRouter>
          <Routes>
          {/* <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} /> */}
        <Route path='/' element={<MainPage/>}/>
        <Route path='/createBlog' element={<CreateBlog/>}/>
        <Route path = '/flightCalculator' element ={<FlightCarbonCalculator/>}/>
        <Route path = '/ecommerceCalculator' element ={<EcommerceCarbonCalculator/>}/>
        <Route path = '/shop' element ={<Shop/>}/>
         </Routes>
        </HashRouter>
        </div>
  )
}

export default App
