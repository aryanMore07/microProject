import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:categoryName" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
