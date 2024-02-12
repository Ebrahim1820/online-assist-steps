import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import UserInfo from "./components/UserInfo";
// import Stepper from "./components/Steppers";
// import { Stepone } from "./components/ApplicationSteps/Stepone";
// import { Steptwo } from "./components/ApplicationSteps/Steptwo";
// import { Stepthree } from "./components/ApplicationSteps/Stepthree.tsx";

const StyledApp = styled.div`
  background-color: var(--color-grey-100);
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <UserInfo />

        {/* <Stepone />
        <Steptwo />
        <Stepthree /> */}
      </StyledApp>
    </>
  );
}

export default App;

{
  /* <BrowserRouter>
<Routes>
  <Route path="home" element={<Home />} />
  <Route path="home" element={<Home />} />
  <Route path="contact" element={<Contact />} />
</Routes>
</BrowserRouter> */
}
