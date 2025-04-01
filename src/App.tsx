import './App.css'
import TodoMenu from "./components/todoMenu/todoMenu.tsx";
import {useSelector} from "react-redux";

function App() {
    const todos = useSelector(state => state.reducer.todos)

    return (
        <TodoMenu todos={todos}/>
    )
}

export default App
