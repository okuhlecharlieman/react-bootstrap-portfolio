

import Navbar from './Components/Navbar'
import Intro from './Components/Intro';
import Photo from './Components/Photo';
import PersonalDetails from './Components/PersonalDetailsSection';
import Education from './Components/Education';
import Projects from './Components/Projects';
import WorkParticipation from './Components/WorkParticipation';
import WorkExpertise from './Components/WorkExpertise';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <PersonalDetails/>
      <Education/>      

      <WorkParticipation/>
      <WorkExpertise/>
      <Projects/>
    <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
