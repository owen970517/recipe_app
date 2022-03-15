import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import {Link, useParams} from "react-router-dom"
function Cuisine() {
    const API_KEY ="e96f3a1e87ae4bca84609393a46699ad";
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(()=> {
        getCuisine(params.kind);
        console.log(params.kind)
    },[params.kind])

    return ( 
            <Grid>
                {cuisine.map((item)=> {
                    return (
                        <Card key={item.id}>
                            <Link to={"/detail/" + item.id}>
                                <h4>{item.title}</h4>
                                <img src={`https://spoonacular.com/recipeImages/${item.id}-312x231.jpg`} alt={`${item.title}`}/>
                            </Link>
                        </Card>
                    )
                })}
            </Grid>
        
    )
}
const Grid = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fit , minmax(20rem,1fr));
    grid-gap : 3rem;
`;
const Card = styled.div`
    img {
        width:100%;
        text-align : center;
        border-radius : 20px;
    }
    a {
        text-decoration : none;
    }
    h4 {
        text-align : center;
        padding : 20px;
    }
`;
export default Cuisine;