import './App.css';
 import Form from './components/Form.js'
 import Login from './components/Login'
 import { Routes , Route ,Navigate} from 'react-router-dom'



function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/SignUp' element={<Form/>} />
        <Route path='/'   element={<Navigate to="/SignUp"/>} />
      
      </Routes>   

     
    </div>
  );
}

export default App;
