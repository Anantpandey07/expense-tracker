import styled from "styled-components"
import bg from "./image/bg.png"
import { MainLayout } from "./styles/Layouts";

import Orb from "./components/Orb/orb";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <AppStyled bg = {bg}>
    <Orb/>
    <MainLayout>
       <Navigation/>
    </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;


export default App
