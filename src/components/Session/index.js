import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Footer from "../Footer";

function Session(){
    const {sessionId} = useParams();
    const [session, setSession] = useState(null);
    const [nome,setNome] = useState(null);
    const [CPF,setCPF] = useState(null);
    let contador = 0;

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promise.then(answer => setSession(answer.data));
    },[]);

    function ShowSeats(seat){
        contador++;
        return seat.isAvailable ? (
            <Seat color='#C3CFD9' borderColor='#808F9D'>{contador}</Seat>
        ):(
            <Seat color='#FBE192' borderColor='#F7C52B'>{contador}</Seat>
        )
    }

    function reservar(){
        
    }


    if(session === null) {
		return <h2>LOADING....</h2>;
	}

    return (
        <ChooseSeats>
            <h3>Selecione o(s) assento(s)</h3>
            <Seats>
            {session.seats.map(seat => ShowSeats(seat))}
            <Captions>
                <Caption color='#8DD7CF' borderColor='#1AAE9E'><div></div><p>Selecionado</p></Caption>
                <Caption color='#C3CFD9' borderColor='#7B8B99'><div></div><p>Disponível</p></Caption>
                <Caption color='#FBE192' borderColor='#F7C52B'><div></div><p>Indisponível</p></Caption>
            </Captions>
            </Seats>
            <form onSubmit={reservar}>
		        <input type="text" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} required/>
		        <input type="number" placeholder="Digite seu CPF..." pattern=".{8,}" value={CPF} onChange={e => setCPF(e.target.value)} required/>
		        <button type="submit">Login</button>
		    </form>
            <Footer title={session.movie.title} poster={session.movie.posterURL} weekday={session.day.weekday} date={session.day.date}/>
        </ChooseSeats>
)
}

const ChooseSeats = styled.section`
    display:flex;
    flex-direction: column;
    margin-bottom: 130px;
    font-family: 'Roboto', sans-serif;
    align-items: center;

    h3{
        display: flex;
        align-itens: center;
        justify-content: center;
        font-size: 24px;
        padding: 40px 0 18px 0;
    }`

const Seats = styled.article`
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    justify-content: center;
`

const Seat = styled.div`
    height: 26px;
    width: 26px;
    background:${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 9px 3.5px;
`

const Captions = styled.div`
    display:flex;
`

const Caption = styled.caption`
    margin: 12px;
    div{
        background:${props => props.color};
        height: 25px;
        width: 25px;
        border: 1px solid ${props => props.borderColor};
        border-radius:15px;
        margin: 6px;
    }
    p{
        color: #4E5A65;
    }
`


export default Session;