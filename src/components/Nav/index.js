import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import Brand from '../Brand'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: '#F7F2F2',
    color: '#454545',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    flexGrow: 3,
    textAlign: 'right',
    '& button' :{
      margin: 8,
      fontFamily: 'sofia-pro',
      '&:hover, &$focusVisible': {
        backgroundColor: '#F7F2F2',
        color:'#C06468',
        borderStyle: 'solid transparent',
        // borderWidth: 1,
        // borderColor: '#C06468'
      },
    },
  },
  toolbar: {
    minHeight: 128,
  }
}))

const btnStyles = makeStyles((theme) => ({
  root: {
    
  },
  '&:hover, &$focusVisible': {
    backgroundColor: '#000000',
  },
}))


const Nav = (props) => {

  const classes = useStyles()
  const btnClasses = btnStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const { width } = props
  const position = isMobile ? 'static' : 'fixed'
  return(
    <AppBar position={position} className={classes.colorPrimary}>
      <Toolbar className={classes.toolbar}>
        <Link to={ '/' }>
          <Brand/>
        </Link>
        <div className={classes.nav}>
          {/* <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span> */}
          <Hidden smDown>
            <Link to={ '/' }>
              <Button color='inherit'>Home</Button>
            </Link>
            <Link to={ '/athlinks' }>
                <Button color='inherit'>Athlinks</Button>
            </Link>
            <Link to={ '/planfu' }>
                <Button color='inherit'>Planfu</Button>
            </Link>
            <Link to={ '/about' }>
              <Button color='inherit'>About</Button>
            </Link>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  )
}

Nav.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Nav)

