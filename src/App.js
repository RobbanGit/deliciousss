import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={"/"}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

let Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Avantgarde', cursive;
`

let Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg{
  font-size: 2rem;
}
`

export default App;
