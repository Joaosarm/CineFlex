import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Success() {
  const location = useLocation();
  const {name, CPF, session, selectedSeats} = location.state;
  const navigate = useNavigate();
  console.log(selectedSeats);
  return(
  <Order>
      <h3>Pedido feito com sucesso!</h3>
      <h4>Filme e sessão</h4>
      <p>{session.movie.title}</p>
      <p>{session.day.date} {session.name}</p>
      <h4>Ingressos</h4>
      {selectedSeats.map(seat => <p>Assento {seat}</p> )}
      <h4>Comprador</h4>
      <p>Nome: {name}</p>
      <p>CPF: {CPF}</p>
      <div><button onClick={() => navigate('/')}>Voltar para Home</button></div>
  </Order>
    
  )
}

const Order = styled.section`
    display:flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin-left: 29px;

    h3{
        display: flex;
        align-itens: center;
        text-align: center;
        margin-right: 29px;
        font-size: 24px;
        padding: 40px;
        color: #247A6B;
        font-weight: 700; 
    }
    h4{
        margin-top: 30px;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 6px;
    }
    p{
      font-size: 22px;  
      margin: 3px;
    }
    div{
        display:flex;
        width: 100%;
        justify-content: center;
    }
    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        margin-top: 90px;
        margin-right: 29px;
    }

`

