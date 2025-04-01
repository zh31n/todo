import s from './ChooseButtons.module.scss';
import {useAppDispatch} from "../../redux/store.ts";
import {setCurrentTodosAction} from "../../redux/Reducers/Actions.ts";

const ChooseButtons = ({title, number}) => {

    const dispatch = useAppDispatch();
    const onClickBtn = () => {
        dispatch(setCurrentTodosAction(number))
    }

    return (
        <button onClick={onClickBtn} className={s.btn}>
            {title}
        </button>
    );
};

export default ChooseButtons;