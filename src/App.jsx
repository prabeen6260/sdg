import MainPage from './components/main-page/mainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import Register from './components/login/register';
import { CreateBlog } from './components/blogs/createBlog';
import { FlightCarbonCalculator} from './components/calculator/flightCarbonCalculator';
import { EcommerceCarbonCalculator } from './components/calculator/ecommerceCarbonCalculator';
import { Shop } from './components/shop/shop';

function App() {

  return (
      <div>
        <Router>
          <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
         { /*<Route path="/home" element ={<Home/>} />*/}
        <Route path='/home' element={<MainPage/>}/>
        <Route path='/createBlog' element={<CreateBlog/>}/>
        <Route path = '/flightCalculator' element ={<FlightCarbonCalculator/>}/>
        <Route path = '/ecommerceCalculator' element ={<EcommerceCarbonCalculator/>}/>
        <Route path = '/shop' element ={<Shop/>}/>
         </Routes>
        </Router>
        </div>
  )
}

export default App
