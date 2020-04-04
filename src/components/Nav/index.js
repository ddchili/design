import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


import { Link } from 'react-router-dom'

import Brand from '../Brand'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: '#F7F2F2',
    color: '#454545',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    flexGrow: 3,
    textAlign: 'right'
  }
}));

export default function Nav(props){

  const classes = useStyles();
  
  return(
    <AppBar position='static' className={classes.colorPrimary}>
      <Toolbar>
        <Brand/>
        {/* <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant='h6' className={classes.title}>
          DEMMER DESIGN
        </Typography> */}
        <div className={classes.nav}>
        <Link to={ '/' }>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to={ '/work' }>
            <Button color='inherit'>Work</Button>
          </Link>
          <Link to={ '/play' }>
            <Button color='inherit'>Play</Button>
          </Link>
          <Link to={ '/contact' }>
            <Button color='inherit'>Contact</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

