import s from './TodoItem.module.scss';

interface PropsI{
    title:string,
    status:boolean,
    id:number
}

const TodoItem = ({title,status,id,toggle}:PropsI) => {

    const toggleIsDone = () => toggle(id);

    return (
        <div className={s.item}>
            <input type="checkbox" onChange={toggleIsDone} checked={status}  className={s.check}/>
            <h1 className={s.title}
                style={{textDecoration: status && 'line-through',color: status && 'rgb(187,187,187)'}}
            >{title}</h1>
        </div>
    );
};

export default TodoItem;