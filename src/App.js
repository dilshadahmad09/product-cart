import "./App.css";
import Header from "./components/Header";
import {Routes, Route}  from 'react-router-dom';
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart' element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
