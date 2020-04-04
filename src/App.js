import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav'

import HomeView from './views/HomeView'
import WorkView from './views/WorkView'
import PlayView from './views/PlayView'
import ContactView from './views/ContactView'

import './App.css'
import './styles/app.css'
import './static/scss/styles.scss'

import brandIcon from './static/img/svg/brand_icon_demmerDesign.svg'

const NewBtn = {
  
}

function App() {
  const repoName = process.env.PUBLIC_URL;
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path={ repoName + '/work' }>
              <Work />
            </Route>
            <Route path={ repoName + '/play' }>
              <Play />
            </Route>
            <Route path={ repoName + '/contact' }>
              <Contact />
            </Route>
            <Route path={ repoName + '/' }>
              <Home />
            </Route>
          </Switch>
        </div>
        <div className='w-full m-auto flex flex-wrap mt-20 justify-center text-left'>
          <img className='w-1/6' src={brandIcon}/>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <HomeView/>
      <h2>Home</h2>
    </div>
  )
}

function Work() {
  return (
    <div>
      <WorkView/>
      <h2>Work</h2>
    </div>
  ) 
}

function Play() {
  return (
    <div>
      <PlayView/>
      <h2>Play</h2>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <ContactView/>
      <h2>Contact</h2>
    </div>
  )
}


export default App;
