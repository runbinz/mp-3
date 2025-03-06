import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import styled from "styled-components";

import Home from "./components/Pages/Home.tsx";
import Education from "./components/Pages/Education.tsx";
import Activities from "./components/Pages/Activities.tsx";
import Work from "./components/Pages/Work.tsx";
import Certs from "./components/Pages/Certs.tsx";
import Projects from "./components/Pages/Projects.tsx";
import Credits from "./components/Pages/Credits.tsx";

import Header from "./components/Tags/Header.tsx";
import Nav from "./components/Tags/Nav.tsx";
import Footer from "./components/Tags/Footer.tsx";
import Container from "./components/Tags/Container.tsx";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
`;

function Root() {
    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/activities" element={<Activities/>}/>
                    <Route path="/certs" element={<Certs/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/credits" element={<Credits/>}/>
                </Routes>
            </Container>
            <Footer />
        </PageWrapper>
    );
}

const router = createBrowserRouter(
    [
        {path: "*", Component: Root}
    ]
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
