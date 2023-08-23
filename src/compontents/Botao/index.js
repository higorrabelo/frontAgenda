import './Botao.css'

export function Botao(props){
    return(
        <div class="btn">
            {props.nome}
        </div>
    );
}