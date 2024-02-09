import "./App.css";

import { Provider } from "react-redux";
import  store  from "./app/store";
import AddTasks from './components/AddTasts';
import Todos from "./components/Todos";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <Provider store={store}>
     <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/addtask" element={<AddTasks />}/>
         <Route path="/viewtask" element={<Todos />}/>
     </Routes>
     <ToastContainer/>
     </Provider>
  )
}

export default App;
