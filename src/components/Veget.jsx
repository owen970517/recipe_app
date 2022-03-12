import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
function Veget() {
   

    const [ veget , setVeget ] = useState([]);
    useEffect(()=>{
        getVegetFood();
    },[])

    const getVegetFood = async () => {
        const storage = localStorage.getItem("veget");
        if(storage) {
            setVeget(JSON.parse(storage));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json();
            localStorage.setItem("veget" , JSON.stringify(data.recipes));
            console.log(data.recipes);
            setVeget(data.recipes);
        }
    }
    return (
        <div>
            <Wrapper>
                <h3>Vegeterian's Food</h3>
                <Splide options={{
                    perPage : 3,
                    arrows : false , 
                    pagination : false,
                    gap: "5rem"
                }}>
                    {veget.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={recipe.title}/>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>   
        </div>        
    )  
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
        left : 0
        width : 100%;
        height : 100%;
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

export default Veget;