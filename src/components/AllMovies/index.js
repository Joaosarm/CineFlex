import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AllMovies(){
    const [movies, setMovies] = useState(null);

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(answer => setMovies(answer.data));
    },[]);

    if(movies === null) {
		return <h2>LOADING....</h2>;
	}

    return(
        <Movies>
        <h2>Selecione o filme</h2>
        <Posters>
        {movies.map(movie =>  <Link to={`/images/${movie.id}`}><img src={movie.posterURL} /></Link>)}
        </Posters>
        </Movies>
    )
}

const Movies = styled.section`
    display:flex;
    flex-direction: column;

    h2{
        display: flex;
        align-itens: center;
        justify-content: center;
        font-size: 24px;
        padding: 40px;
    }
`

const Posters = styled.div`
    display:flex;
    align-itens: center;
    justify-content: center;
    flex-wrap: wrap;
    img{
        width: 129px;
        height: 193px;
        padding:8px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        margin: 5.5px 15px;
    }
`







export default AllMovies;