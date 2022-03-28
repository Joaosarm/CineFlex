import styled from "styled-components";

function Footer(props){

    return !props.date ? (
        <Session>
            <img src={props.poster} alt={props.title}/>
            <h2>{props.title}</h2>
        </Session>
        ):(
        <Session>
            <img src={props.poster} alt={props.title}/>
            <div><h2>{props.title}</h2><h2>{props.weekday} - {props.date}</h2></div>
        </Session>
    )
}

const Session = styled.footer`
    height: 117px;
    width: 100vw;
    background: #DFE6ED;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    img{
        height: 72px;
        width: 48px;
        background: #FFFFFF;
        border-radius: 2px;
        padding: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin: 10px;
    }

    h2{
        font-weight: 400;
        font-size: 24px;
        margin: 4px;
    }
`

export default Footer;