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
import FabNav from './components/FabNav'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import './App.css'
import './styles/app.css'
import './static/scss/styles.scss'

import brandIcon from './static/img/svg/brand_icon_demmerDesign.svg'

const NewBtn = {
  
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    },
  },
}))

function App(props) {
  const classes = useStyles();
  return (
      <div className='App'>
        <Nav/>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path={ '/work' }>
              <Work />
            </Route>
            <Route path={ '/play' }>
              <Play />
            </Route>
            <Route path={ '/contact' }>
              <Contact />
            </Route>
            <Route path={ '/' }>
              <Home />
            </Route>
          </Switch>
        </div>
        <div className='w-full m-auto flex flex-wrap mt-20 justify-center text-left'>
          <img className='w-16 mb-20' src={brandIcon}/>
        </div>
        <div className={classes.root}>
          <FabNav/>
        </div>
      </div>
  );
}

function Home() {
  return (
    <div>
      <HomeView/>
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
