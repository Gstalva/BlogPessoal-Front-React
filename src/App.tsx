import { Navbar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Login} from './pages/login/Login';
import { Cadastro } from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
  );
}