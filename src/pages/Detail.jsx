import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
function Detail() {
    const API_KEY ="e96f3a1e87ae4bca84609393a46699ad";
    const [detail , setDetail] = useState([]);
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
        <div>
            <h3>{detail.title}</h3>
        </div>
    )
}
export default Detail;