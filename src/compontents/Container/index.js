import './Container.css'

function Container(props){
    return(
        <div className='box'>
            <h1 className='titulo'>{props.titulo}</h1>
            {props.children}
        </div>
    );
}
export default Container