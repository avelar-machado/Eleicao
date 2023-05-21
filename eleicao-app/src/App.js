import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Eleitor from './components/pages/Eleitor'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Project from './components/pages/Project'
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <>       
      <BrowserRouter> 

        <NavBar/> 

        <Container customClass = "minHeight container">
          <Routes>                
            <Route path="/" element={<Home />} />  
            <Route path="/eleitor" element={<Eleitor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />                   
          </Routes> 
        </Container>       
        <Footer/> 
      </BrowserRouter>
    </>
    
    
  );
}

export default App;
