import './cssComponents/stylesComponents.css';

export function TodoItem(props){
    return (
        <li className="todoItem--todo">
    
            <input className="todoItem--checkbox" type="checkbox"/>
            <p className={`todoItem--p ${props.completed && 'checked'}`}>
                {props.text}
            </p>
            
            <button className="todoItem--btnRemove" type="button">X</button>
        </li>
    )
}