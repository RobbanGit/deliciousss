import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { color } from 'framer-motion';

function Recipe() {

    let params = useParams();
    let [details, setDetails] = useState({});

    let fetchDetails = async () => {
        let data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        let detailsData = await data.json();
        setDetails(detailsData);
        console.log(details);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.id])


    //idea: have a tab on the right side, showing if it's cheap, vegetarian, dairy-free, etc.

    return (
        <div>
            <Card>
                <h3 style={{ textAlign: "center", fontWeight: "bold" }}>{details.title}</h3>
                <img src={details.image} alt={details.title} />
                <p >Servings: {JSON.stringify(details.servings)} &emsp; | &emsp; Time:
                    {JSON.stringify(details.readyInMinutes) < 30 ? (
                        <span style={{ color: "green" }}> {JSON.stringify(details.readyInMinutes)} minutes</span>
                    ) : (
                        JSON.stringify(details.readyInMinutes) >= 30 && JSON.stringify(details.readyInMinutes) < 60 ? (
                            <span style={{ color: "orange" }}> {JSON.stringify(details.readyInMinutes)} minutes</span>
                        ) : (
                            <span style={{ color: "red" }}> {JSON.stringify(details.readyInMinutes)} minutes</span>
                        )
                    )}
                </p>
            </Card>

            <DetailsTable>
                <h3>Information</h3>
                <tbody>
                <tr>
                    <th>Vegetarian:</th>
                    <td>{JSON.stringify(details.vegetarian)}</td>
                </tr>
                <tr>
                    <th>Vegan:</th>
                    <td>{JSON.stringify(details.vegan)}</td>
                </tr>
                <tr>
                    <th>Dairy-free:</th>
                    <td>{JSON.stringify(details.dairyFree)}</td>
                </tr>
                <tr>
                    <th>Gluten-free:</th>
                    <td>{JSON.stringify(details.glutenFree)}</td>
                </tr>
                <tr>
                    <th>Healthy:</th>
                    <td>{JSON.stringify(details.veryHealthy)}</td>
                </tr>
                </tbody>
            </DetailsTable>

        </div>
    )
}

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  float: left;

  img{
    border-radius: 2rem;
  }
  p{
    text-align: center;
  }
  h2{
    text-align: left;
  }
`

const DetailsTable = styled.table`
    
    min-height: 5rem;
    text-align: left;
    float: right;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;

    h3{
        text-align: center;
        margin-bottom: 0.5rem;
        text-decoration: underline solid;
    }
`

export default Recipe