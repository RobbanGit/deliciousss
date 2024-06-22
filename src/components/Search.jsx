import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'
import Searched from '../pages/Searched'

const Search = () => {

    const [ searchInputValue, setSearchInputValue ] = useState("");
    const navigate = useNavigate();


    const submitHandler = ( item ) => {
        item.preventDefault();
        navigate('/searched/'+searchInputValue)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
            <input type="text" placeholder='Search Food...' value={searchInputValue} onChange={ (searchValue) => setSearchInputValue(searchValue.target.value) } />
            </div>
        </FormStyle>
    )

      
      

}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        width: 100%;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search