import './App.css'
import Banner from './components/Banner/Banner'
import Section from './components/Containers/Section'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Section>
        <Banner />
      </Section>
    </>
  )
}

export default App
