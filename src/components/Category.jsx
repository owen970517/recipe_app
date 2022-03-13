import {FaPizzaSlice , FaHamburger } from 'react-icons/fa';
import {GiNoodles , GiChopsticks,GiSushis } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <List>
            <NavLink to={'/cuisine/Korean'}>
                <GiChopsticks/>
                <h4>Korea</h4>
            </NavLink >
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </NavLink >
            <NavLink to={'/cuisine/American'}>
                <FaHamburger/>
                <h4>US</h4>
            </NavLink >
            <NavLink to={'/cuisine/Chinese'}>
                <GiNoodles/>
                <h4>China</h4>
            </NavLink >
            <NavLink to={'/cuisine/Japanese'}>
                <GiSushis/>
                <h4>Japan</h4>
            </NavLink >

        </List>
    )
}
const List = styled.div`
    display :flex;
    justify-content : center;
    align-items : center;

    a {
        text-decoration : none;
        margin-left :20px;
        text-align : center;
        background : #000;
        padding : 10px;
        border-radius : 20px;
        color : #fff;
        cursor : pointer;
        width : 100px;
    }
    h4 {
        color : #fff;
    }
    a.active {
        background : #f12836;
    }
`
export default Category;