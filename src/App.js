
import './App.css';

import {Container} from "@mui/material"
import Header from "./components/header"

import Input from "./components/input"
import TodoList from "./components/todolist"
function App() {
  return (
  <>
  <div>
    <Container className="container"> 
    <Header/> 
    <Input/>
    <TodoList/>
    </Container>
 
  
  </div>
  </>
  );
}

export default App;
