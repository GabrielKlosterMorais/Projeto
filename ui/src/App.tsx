import './App.css'
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ListaProdutos from './pages/listaProdutos';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutos />} />
      </Routes>
    </>
  )
}

export default App
