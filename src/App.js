 import './App.css';
import Api from './Api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Test from './Components/Test';
import ResultApp from './Components/ResultApp';

function App() {
  const data = useSelector((state ) => state.test.dataTests)
  return (
    <div className="App">
   <BrowserRouter>
    <Routes >
    <Route path='/' element={<Api />} />
      {data.map((item, i) => {return  <Route path={'/test'+i} key={i} element={<Test data={item} index={i}/>} />
      })}
      <Route path='/result' element={<ResultApp />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
