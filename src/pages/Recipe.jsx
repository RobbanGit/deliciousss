import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { color } from 'framer-motion';
import reactStringReplace from 'react-string-replace';

function Recipe() {

    let params = useParams();
    let [details, setDetails] = useState({});
    let [summary, setSummary] = useState([]);
    let [instructions, setInstructions] = useState([]);

    let fetchDetails = async () => {
        let data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        let detailsData = await data.json();
        setDetails(detailsData);
        console.log("--DETAILS--")
        console.log(details);
    }

    let filterOutTagsFromSummary = () => {
        const regex = /(<([^>]+)>)/ig;
        let result = details.summary;
        if (result){
            result = result.replace(regex, '');
            setSummary(result);
        }
    }

    let filterOutTagsFromInstructions = () => {
        const regex = /(<([^>]+)>)/ig;
        let resultString = details.instructions;
        if (resultString){
            resultString = resultString.replace(regex, '');
            let result = [];
            let counter = 0;
            resultString.split('.').forEach( (item) => {
                if (item != ''){
                    counter++;
                    result.push(
                        <p>{counter + ": " + item}</p>
                        )
                }
                
            })

            setInstructions(result);
        }
    }

    useEffect(() => {
        fetchDetails();
        
        
    }, [params.id])

    useEffect( () => {
        filterOutTagsFromSummary();
    }, [details.summary])

    useEffect( () => {
        filterOutTagsFromInstructions();
    }, [details.instructions])


    return (
        <>
        <div className="container" style={{display:"flex", justifyContent: "center"}}>

            <div style={{flex:0.5}}>
            <h3 style={{textAlign:"center", textDecoration:"underline solid"}}>Information</h3>
                <DetailsTable>
                
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
                    &emsp; |&emsp; Steps: {instructions.length}
                </p>
            </Card>
            
            <SummaryCard>
                <h3>Summary</h3>
                <p>{summary}</p>
            </SummaryCard>


        </div>
        <div className='container' style={{display:"flex", justifyContent: "center"}}>
            <InstructionsCard>
                <h3>Steps</h3>
            {instructions}
            </InstructionsCard>
        </div>
        </>
    )
}

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  max-width: fit-content;
  float: left;
  flex: 3;

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
    width: 100%
`

const SummaryCard = styled.div`
    min-height: 5rem;
    text-align: left;
    float: right;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    
    h3{
        text-align: center;
        margin-bottom: 0.5rem;
        text-decoration: underline solid;
    }

`

const InstructionsCard = styled.div`
    h3{
        text-align: center;
        margin-bottom: 0.5rem;
        text-decoration: underline solid;
    }
    
`

export default Recipe