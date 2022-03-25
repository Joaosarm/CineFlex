import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Movie(){
    const {movieId} = useParams();
    const [days, setDays] = useState(null);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(answer => setDays(answer.data.days));
    },[]);

    function ShowSessions({weekday, date, showtimes, id}){
        return(
            <Weekday key={id}>
            <Date>{weekday} - {date}</Date>
            <Showtimes>
                {showtimes.map(showtime => <Link key={showtime.id} to={`/sessao/${showtime.id}`}><Session>{showtime.name}</Session></Link>)}
            </Showtimes>
            </Weekday>
        )
    }

    if(days === null) {
		return <h2>LOADING....</h2>;
	}

    return(
        <Sessions>
            <h2>Selecione o horário</h2>
            {days.map(day => ShowSessions(day))}
        </Sessions>
    )
}

const Sessions = styled.section`
    display:flex;
    flex-direction: column;
    margin-bottom: 30px;

    h2{
        display: flex;
        align-itens: center;
        justify-content: center;
        font-size: 24px;
        padding: 40px 0 18px 0;
    }
`

const Weekday = styled.div`
    margin-left: 24px;
`

const Date = styled.h3`
    font-size: 20px; 
    margin: 22px 0;
`

const Showtimes = styled.div`
    display:flex;
`

const Session = styled.div`
    font-size: 18px; 
    background: #E8833A;
    color: #FFFFFF;
    width: 43px;
    padding: 10px;
    margin-right: 7px;
    text-decoration: none;
`

export default Movie;