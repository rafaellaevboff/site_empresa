import './App.css';

import Home from './pages/Home/Home';
import Produtos from './pages/Produtos/Produtos';
import Produto from './pages/Produto/Produto';
import Contato from './pages/Contato/Contato';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/produto' element={<Produto />} />
          <Route path='/produto'>
            <Route path=':id' element={<Produto />}/>
          </Route>
          <Route path='/contato' element={<Contato />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
