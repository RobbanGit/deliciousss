import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <List>
            <ListElement>
                <NavLink to={'/cuisine/italian'}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </NavLink>
            </ListElement>
            <ListElement>
                <NavLink to={'/cuisine/american'}>
                    <FaHamburger />
                    <h4>American</h4>
                </NavLink>
            </ListElement>
            <ListElement>
                <NavLink to={'/cuisine/chinese'}>
                    <GiNoodles />
                    <h4>Chinese</h4>
                </NavLink>
            </ListElement>
            <ListElement>
                <NavLink to={'/cuisine/japanesekorean'}>
                    <GiChopsticks />
                    <h4>Japanese & Korean</h4>
                </NavLink>
            </ListElement>
        </List>
    )
}

const ListElement = styled.div`
    display: flex;
    justify-content: center;
    margin: 0rem 1.5rem;
`

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category