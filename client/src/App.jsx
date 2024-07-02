import styled from "styled-components"
import bg from "./image/bg.png"
import { MainLayout } from "./styles/Layouts";

import Orb from "./components/Orb/orb";

function App() {
  return (
    <AppStyled bg = {bg}>
    <Orb/>
    <MainLayout>
    <h1>hiiii</h1>
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
