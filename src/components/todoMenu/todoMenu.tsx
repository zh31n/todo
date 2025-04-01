import s from './todoMenu.module.scss';
import TodoItem from "../TodoItem/TodoItem.tsx";
import {useState} from "react";
import {useAppDispatch} from "../../redux/store.ts";
import {addTodo, deleteDoneTodosAction, toggleIsDoneAction} from "../../redux/Reducers/Actions.ts";
import ChooseButtons from "../ChooseButtons/ChooseButtons.tsx";
import {useSelector} from "react-redux";
import ActiveTodos from "../ActiveTodos/ActiveTodos.tsx";
import DoneTodos from "../DoneTodos/DoneTodos.tsx";
import NoTodos from "../NoTodos/NoTodos.tsx";


const TodoMenu = ({todos}) => {

    const dispatch = useAppDispatch();

    const [newTodoText, setNewTodoText] = useState<string>('')
    const toggleIsDone = (id) => dispatch(toggleIsDoneAction(id));

    const currentNumber = useSelector(state => state.reducer.currentTodos)

    const notIsDoneToDo = todos.filter(t => !t.isDone).length;

    const todosMap = todos.map(t => <TodoItem toggle={toggleIsDone} title={t.title} key={t.id} status={t.isDone}
                                              id={t.id}/>)

    const onClickAdd = () => {
        dispatch(addTodo(newTodoText))
        setNewTodoText('')
    }


    return (
        <main className={s.main}>
            <h1 className={s.title}>todos</h1>
            <div className={s.todo}>
                <div className={s.addingInp}>
                    <input type="text" value={newTodoText} onChange={e =>
                        setNewTodoText(e.target.value)} placeholder={'Что нужно сделать?'}/>
                    <div onClick={onClickAdd} className={s.plus}>+</div>
                </div>
                {currentNumber === 0 && <div className={s.todos}>{todosMap.length === 0 ? <NoTodos/> : todosMap}</div>}
                {currentNumber === 1 && <ActiveTodos toggle={toggleIsDone} todos={todos}/>}
                {currentNumber === 2 && <DoneTodos toggle={toggleIsDone} todos={todos}/>}
                <div className={s.nav}>
                    <div className={s.countTodosNotIsDone}> Осталось дел : {notIsDoneToDo} </div>
                    <div className={s.chooseButtons}>
                        <ChooseButtons number={0} title={'All'}/>
                        <ChooseButtons number={1} title={'Active'}/>
                        <ChooseButtons number={2} title={'Completed'}/>
                    </div>
                    <button onClick={() => dispatch(deleteDoneTodosAction())} className={s.clearBtn}>Clear completed
                    </button>
                </div>
            </div>
        </main>
    );
};

export default TodoMenu;