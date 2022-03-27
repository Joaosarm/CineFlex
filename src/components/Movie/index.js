import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Footer from "../Footer";

function Movie(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(answer => setMovie(answer.data));
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

    if(movie === null) {
		return <h2>LOADING....</h2>;
	}

    return(
        <Sessions>
            <h3>Selecione o horário</h3>
            {movie.days.map(day => ShowSessions(day))}
            <Footer title={movie.title} poster={movie.posterURL}/>
        </Sessions>
    )
}

const Sessions = styled.section`
    display:flex;
    flex-direction: column;
    margin-bottom: 130px;
    font-family: 'Roboto', sans-serif;

    h3{
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

const Date = styled.h4`
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