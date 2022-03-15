import { useState } from 'react';
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"

function Search() {
    const [input , setInput] = useState("");
  
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }

    return (
        <SearchBox onSubmit={handleSubmit}>
               <label>
                    <input type="text" 
                    placeholder="Search Food" 
                    onChange={(e)=>setInput(e.target.value)} 
                    value={input}></input>  
               </label>  
        </SearchBox>
    )
}
const SearchBox = styled.form`
    text-align : center;
    margin : 30px 0;

    input {
        width : 300px;
        height : 50px;
        border-radius : 20px;
        padding : 20px;
    }
`
export default Search;