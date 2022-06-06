import './cssComponents/stylesComponents.css';

export function TodoItem(props){

    const onCompleted = () => {
        alert(`Completaste ${props.text}`)
    }   

    const onDeleted = () => {
        alert(`Borraste ${props.text}`)
    }

    return (
        <li className="todoItem--todo">
    
            <button className={`todoItem--btn-check ${props.completed && 'btn-check-completed'}`} onClick={onCompleted} type="button">✔</button>
            <p className={`todoItem--p ${props.completed && 'checked'}`}>
                {props.text}
            </p>
            
            <button className="todoItem--btnRemove" onClick={onDeleted} type="button">X</button>
        </li>
    )
}