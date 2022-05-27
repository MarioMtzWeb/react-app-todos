import './cssComponents/stylesComponents.css';

export function TodoList(props){

    return (
        <section className="todoList--section-container">
            <ul className="todoList--list">
                {props.children}
            </ul>
        </section>
    );
}