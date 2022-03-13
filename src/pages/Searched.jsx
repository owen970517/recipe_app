import { useEffect, useState } from "react";
import {useParams , Link} from "react-router-dom"
import styled from "styled-components";


function Searched() {
    const API_KEY = "e96f3a1e87ae4bca84609393a46699ad";

    const [foods,setFoods] = useState([]);
    let params = useParams();

    const getFood = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=${API_KEY}&query=${name}&number=10`)
        const kinds = await data.json();
        console.log(kinds.menuItems);
        setFoods(kinds.menuItems);
    }
    useEffect(()=> {
        getFood(params.search);
    } , [params.search]);    
    return (
        <Grid>
            {foods.map((item)=>{
                return (
                    <Card key={item.id}>
                        <Link to={'/detail/' + item.id}>
                            {item.title}
                            <img src={item.image} alt={`${item.title}`}/>
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
    margin-top : 30px;
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
export default Searched;