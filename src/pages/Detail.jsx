import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Cuisine from "./Cuisine";
function Detail() {
    const API_KEY ="e96f3a1e87ae4bca84609393a46699ad";
    const [detail , setDetail] = useState([]);
    const [activeBtn , setActiveBtn] = useState('introduction');
    let params = useParams();

    const getDetail = async (id) => {
        const DetailData = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`) 
        const data = await DetailData.json();
        console.log(data);
        setDetail(data);
    }
    useEffect(()=> {
        getDetail(params.id);
    }, [params.id])
    
    return (
        <DetailBox>
            <div>
                <h2>{detail.title}</h2>
                <img src={detail.image} alt={detail.title}/>
            </div>
            <Info>
                <Button className={activeBtn ==="introduction" ? "active" : ""} onClick={()=> { setActiveBtn('introduction')}}>Introduction</Button>
                <Button className={activeBtn ==="ingredients" ? "active" : ""} onClick={()=> { setActiveBtn('ingredients')}}>Ingredients</Button>
                {activeBtn === 'introduction' && <div>
                    <h3 dangerouslySetInnerHTML={{ __html : detail.summary}}></h3>
                </div>}
                {activeBtn === 'ingredients' && <ul>
                        {detail.extendedIngredients.map((ingredient)=> {
                            return (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            )
                        })}
                    </ul>}

            </Info>
        </DetailBox>
    )
}

const DetailBox = styled.div`
    margin-top : 50px;
    margin-bottom : 5rem;
    display : flex;
    .active {
        background :#000;
        color : #fff;
    }
    h2 {
        margin-bottom : 2rem;
        margin-left : 30px;
    }
    li {
        font-size : 1.2rem;
        line-height : 2.5rem;
    }
    ul {
        margin-top : 2rem;
    }
    img {
        margin-left : 30px;
    }
    a {
        text-decoration : none;
        color : blue;
    }
`

const Button = styled.button`
    padding : 10px;
    color : #313131;
    background : #fff;
    border : 2px solid black
    font-weight : 600;
    margin-right : 30px;
`
const Info =  styled.div`
   margin-left : 10rem;
`
export default Detail;