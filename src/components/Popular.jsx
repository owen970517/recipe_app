import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
function Popular() {
    const API_KEY ="e96f3a1e87ae4bca84609393a46699ad";

    const [ popular , setPopular ] = useState([]);
    useEffect(()=> {
        getPopular();
    },[])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`)
        const data = await api.json();
        console.log(data.recipes);
        setPopular(data.recipes);
    }
    return (
        <div>
            <Wrapper>
                <h3>Favortie Picks</h3>
                <Splide options={{
                    perPage : 3,
                    arrows : false , 
                    pagination : false,
                    gap: "5rem"
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id} >
                                <Card>
                                    <Link to={'/detail/' + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`} alt={recipe.title}/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>   
        </div>        
    );  
}

const Wrapper = styled.div`
    margin : 4rem 0rem;
`;

const Card = styled.div`
    min-height : 25rem;
    border-radius : 2rem;
    overflow : hidden;
    position : relative;

    img {
        border-radius : 20px;
        position : absolute;
        top : 50%;
        left : 50%;
        width : 100%;
        height : 100%;
        transform : translate(-50% , -50%);
        object-fit : cover;
    }
    p {
        position : absolute;
        z-index : 10;
        left :50%;
        bottom : 0%;
        transform : translate(-50% , 0%);
        color : #fff;
        width : 100%;
        text-align : center;
        font-weight : 600;
        font-size : 1rem;
        height : 40%;
        display : flex;
        justify-content : center;
        align-items : center;
    }
`
export default Popular;