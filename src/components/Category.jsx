import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <List>
            <ListElement>
                <StyledLink to={'/cuisine/italian'}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </StyledLink>
            </ListElement>
            <ListElement>
                <StyledLink to={'/cuisine/american'}>
                    <FaHamburger />
                    <h4>American</h4>
                </StyledLink>
            </ListElement>
            <ListElement>
                <StyledLink to={'/cuisine/chinese'}>
                    <GiNoodles />
                    <h4>Chinese</h4>
                </StyledLink>
            </ListElement>
            <ListElement>
                <StyledLink to={'/cuisine/japanese'}>
                    <GiChopsticks />
                    <h4>Japanese</h4>
                </StyledLink>
            </ListElement>
            <ListElement>
                <StyledLink to={'/cuisine/korean'}>
                    <GiChopsticks />
                    <h4>Korean</h4>
                </StyledLink>
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

const StyledLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 1rem;
    }
    svg{
        color: white;
        width: 30%;
        height: 30%;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`

export default Category