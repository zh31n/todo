import s from './NoTodos.module.scss'
const NoTodos = () => {
    return (
        <div className={s.no}>
            <h1>Упс...Похоже уже все выполнено!</h1>
        </div>
    );
};

export default NoTodos;