import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import { CgEnter } from "react-icons/cg";
import { Link } from "react-router-dom";


function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    //Items = recipes
    const checkIfItemsAlreadyStored = localStorage.getItem('popular');

    if (checkIfItemsAlreadyStored){
      setPopular(JSON.parse(checkIfItemsAlreadyStored));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };


  return (
    <div>
      <Wrapper>
        <h3 style={{textAlign:"center", fontWeight:"bold", textDecorationLine:"underline", paddingBottom:"1rem"}}>Popular Recipes</h3>

        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          snap: true,
          rewind: true,
          rewindByDrag: true,
          autoplay: true,
          interval: 3000,
          gap: '5rem'
        }}>

          {popular.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <Card>
                <Link to={"/recipe/"+item.id}>
                  <p style={{textAlign:"center", fontWeight:"bold"}}>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}

        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;

  img{
    border-radius: 2rem;
  }
`

export default Popular