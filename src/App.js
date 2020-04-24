import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from 'react-router-dom'

import Nav from './components/Nav'

import ScrollToTop from './utils/ScrollToTop'

import HomeView from './views/HomeView'
import AthlinksView from './views/AthlinksView'
import PlayView from './views/PlayView'
import AboutView from './views/AboutView'
import FabNav from './components/FabNav'

import { makeStyles } from '@material-ui/core/styles'

import './App.css'
import './styles/app.css'
import './static/scss/styles.scss'

import brandIcon from './static/img/svg/brand_icon_demmerDesign.svg'
import CreateEventView from './views/AthlinksView/CreateEventView'
import Overview from './views/AthlinksView/Overview'
import AthleteRacePage from './views/AthlinksView/AthleteRacePage'
import ActivityFeeds from './views/AthlinksView/ActivityFeeds'
import VirtualRaces from './views/AthlinksView/VirtualRaces'


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
  const classes = useStyles()
  // let { path, url } = useRouteMatch()
  return (
    <div className='App'>
      
      <Router>
        <ScrollToTop>
            <Nav/>
            <div>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path={ '/athlinks' }>
                  <Athlinks />
                </Route>
                <Route path={ '/athlinks/event' }>
                  <CreateEvent />
                </Route>
                <Route path={ '/play' }>
                  <Play />
                </Route>
                <Route path={ '/about' }>
                  <About />
                </Route>
                <Route path={ '/' }>
                  <Home />
                </Route>
                <Route component={Home}/>
              </Switch>
            </div>
            <div className='w-full m-auto flex flex-wrap mt-20 justify-center text-left'>
              <img className='w-16 mb-20' src={brandIcon}/>
            </div>
            <div className={classes.root}>
              <FabNav/>
            </div>
        </ScrollToTop>
      </Router>
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

function Athlinks() {
  // let match = useRouteMatch()
  const { path, url } = useRouteMatch();
  // const createEventLink = (<div><Link to={`${path}/event`}><h1>Create Event</h1></Link></div>)
  // const overviewLink = (<div><Link to={`${path}/overview`}><h1>Overview</h1></Link></div>)
  // console.log(`${path}`)
  return (
    <div>
      <AthlinksView/>
      {/* {match.path === '/athlinks' ? <Overview/> : ''} */}
      <Switch>
        <Route exact path='/athlinks' component={Overview}/>
        <Route path={`/overview`}>
          <Overview/>
        </Route>
        <Route path={`${path}/event`}>
          <CreateEventView/>
        </Route>
        <Route path={`/athlinks/arp`}>
          <AthleteRacePage/>
        </Route>
        <Route path={`/athlinks/feeds`}>
          <ActivityFeeds/>
        </Route>
        <Route path={`/athlinks/vr`}>
          <VirtualRaces/>
        </Route>
        {/* <Route path={match.path}>
          <h3>Select a case study</h3>
          {overviewLink}
          {createEventLink}
        </Route> */}
      </Switch>
    </div>
  ) 
}

function CreateEvent() {
  return (
    <div>
      <CreateEventView/>
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

function About() {
  return (
    <div>
      <AboutView/>
      <h2>About</h2>
    </div>
  )
}


export default App;