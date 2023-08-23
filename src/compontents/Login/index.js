import Container from '../Container'
import { Inputs } from '../Inputs';
import { Botao } from '../Botao';
import Chat from '../Chat';

export function Login(){
    return(
        <div>         
            <Container titulo="Autenticação de Usuário">
            <Inputs nome="Nome"/>
            <Inputs nome="Senha"/>
            <Botao nome="Login"/>
            </Container>
            <Chat />
        </div>
    );
}