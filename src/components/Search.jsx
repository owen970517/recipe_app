import { useEffect, useState } from 'react';
import styled from 'styled-components'

function Search() {
    
    return (
        <SearchBox>
            <form>
                <input type="text" placeholder="Search Food"></input>
            </form>
        </SearchBox>
    )
}
const SearchBox = styled.div`
    text-align : center;
    margin : 30px 0;
    
    input {
        width : 300px;
        height : 50px;
    }
`
export default Search;