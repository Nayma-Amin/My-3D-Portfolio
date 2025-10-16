import Logos from "./sections/Logos.jsx"
import NavBar from "./components/NavBar.jsx"
import Display from "./sections/Display.jsx"
import Nishy from "./sections/nishy.jsx"
import Qualities from "./sections/Qualities.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import SkillStack from "./sections/SkillStack.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"

const App = () => {
  return (
 <>
 <NavBar />
 <Nishy />
 <Display />
 <Qualities />
 <ExperienceSection />
 <SkillStack />
 <Contact />
 <Footer />
 <Logos />
 </> 
  )
}

export default App
