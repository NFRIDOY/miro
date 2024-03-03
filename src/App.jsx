import './App.css'
import Banner from './components/Banner/Banner'
import Collaborate from './components/Collaborate/Collaborate'
import Connect from './components/Connect/Connect'
import Height from './components/Containers/Height'
import Section from './components/Containers/Section'
import Navbar from './components/Navbar/Navbar'
import TrastedUsers from './components/TrastedUsers/TrastedUsers'
import WorkTogether from './components/WorkTogether/WorkTogether'
import TheWayImg from './assets/Images/TheWayImg.png'
import Built from './components/Built/Built'
import CustomerStories from './components/CustomerStories/CustomerStories'

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
        <div className='py-16'>
          <img src={TheWayImg} alt="" />
        </div>
        <Built />
        <CustomerStories />
      </Section>

    </>
  )
}

export default App
