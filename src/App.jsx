import './App.css'
import Banner from './components/Banner/Banner'
import Collaborate from './components/Collaborate/Collaborate'
import Connect from './components/Connect/Connect'
import Height from './components/Containers/Height'
import Section from './components/Containers/Section'
import Navbar from './components/Navbar/Navbar'
import TrastedUsers from './components/TrastedUsers/TrastedUsers'
import WorkTogether from './components/WorkTogether/WorkTogether'

function App() {

  return (
    <>
      <Navbar />
      <Section>
        <Height>
          <Banner />
        </Height>
        <TrastedUsers />
        <Collaborate />
        <WorkTogether />
        <Connect />
      </Section>

    </>
  )
}

export default App
