import './Inputs.css';

export function Inputs(props){
    return(
     <div>
        <label className="labels">{props.nome}</label>
        <input className="inputs" type="text" placeholder="" />
     </div>
    );
}