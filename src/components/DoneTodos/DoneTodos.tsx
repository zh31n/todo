import TodoItem from "../TodoItem/TodoItem.tsx";
import NoTodos from "../NoTodos/NoTodos.tsx";

const DoneTodos = ({todos,toggle}) => {

    const newTodos = todos.filter(t => t.isDone);

    const todosMap = newTodos.map(t => <TodoItem toggle={toggle} title={t.title} status={t.isDone} key={t.id} id={t.id}/>)

    return (
        <div>
            {todosMap.length === 0 ? <NoTodos/> : todosMap}
        </div>
    );
};

export default DoneTodos;