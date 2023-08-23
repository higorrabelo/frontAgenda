import './BarraMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faComment, faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
let BarraMenu = (props)=>{

    if(props.status == 'false'){
        return(
            <div className='menu'>
             <div className='brand'><FontAwesomeIcon icon={faCalendar} /> {props.brand}</div>
                    <ul>
                        <li>
                            <a><FontAwesomeIcon icon={faHome} />  </a>
                        </li>
                        <li>
                            <a><FontAwesomeIcon icon={faComment} />   Mensagens</a>
                        </li>
                        <li>
                            <a><FontAwesomeIcon icon={faUserCircle} /> Conta</a>
                        </li>
                    </ul>
            </div>
        );
    }else{
        return(
            <div className='menu'>
                 <div className='brand'><FontAwesomeIcon icon={faCalendar} /> {props.brand}</div>
            </div>
        );
    }
  
}
export default BarraMenu;
