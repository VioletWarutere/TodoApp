import DeleteTodoItem from "./components/DeleteTodoItem";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import {  BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/delete/:id" element={<DeleteTodoItem />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
