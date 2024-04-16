
import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.css';
import Mainpage from "./components/mainpage";
import Updatinglist from './components/updatinglist';
import { Mycontext } from "./context";
import { useState } from "react";

function App() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const [curitem, setCuritem] = useState();
  const [updatetext, setUpdatetext] = useState();
  const navigate = useNavigate();

    const handlechange = (e) => {
        setText(e.target.value)
    }
    const handleupdateText = (e) =>{
      setUpdatetext(e.target.value)
    }
    
    const handleList = () => {
      setList([...list, text]);
    }
    const changedList = () =>{
      const newList = list.map((item, i) => curitem === i ? updatetext : item);

      setList(newList);
      navigate("/");
    }

    const deleteList = (index) =>{
      const newList = list.filter( (item, i) => {
        return (index !== i)
      })

      setList(newList);

    }

    const updateList = (index) =>{
      setCuritem(index);
      setUpdatetext(list[index]);
      navigate("/updatelist");
    }
  return (
    <div className="App">
      <Mycontext.Provider value={{handlechange, text, handleList, list, deleteList, updateList, updatetext, handleupdateText, changedList}} >
        
        <Routes>
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='/updatelist' element={<Updatinglist/>}></Route>
        </Routes>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
