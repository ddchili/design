import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import MenuIcon from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ExploreIcon from '@material-ui/icons/Explore'
import NavigationIcon from '@material-ui/icons/Navigation'
import Hidden from '@material-ui/core/Hidden'
import { fontFamily } from '@material-ui/system'
import { Link } from 'react-router-dom'
import './styles.scss'

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100vh'
  },
  fullList: {
    width: 'auto',
    height: '100vh',
    '& .MuiList-padding':{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .MuiListItem-button':{
        textAlign: 'center'
      }
    }
  },
  fab: {
    position: 'fixed',
  },
  // extendedIcon: {
  //   marginRight: theme.spacing(1),
  // },
  menuButton: {
    backgroundColor: '#c06468',
    color: '#ffffff'
  },
})

const listStyles = makeStyles({
  root: {
    height: '100vh',
    
    '& .MuiTypography-body1':{
      fontFamily: 'sofia-pro',
      fontSize: 24
    }
  },
  nested: {
    paddingLeft: '2rem',
  },
})

export default function FabNav() {
  const classes = useStyles()
  const listClasses = listStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open);
  }



  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  // const HomeLink = props => <Link to={'/'} {...props} />
  // const WorkLink = props => <Link to={'/work'} {...props} />
  // const PlayLink = props => <Link to={'/play'} {...props} />
  // const ContactLink = props => <Link to={'/contact'} {...props} />

  const HomeLink = React.forwardRef((props, ref) => <Link to={'/'} {...props} ref={ref} />)
  const AthlinksLink = React.forwardRef((props, ref) => <Link to={'/athlinks'} {...props} ref={ref} />)
  const PlanfuLink = React.forwardRef((props, ref) => <Link to={'/planfu'} {...props} ref={ref} />)
  const PlayLink = React.forwardRef((props, ref) => <Link to={'/play'} {...props}  ref={ref} />)
  const ContactLink = React.forwardRef((props, ref) => <Link to={'/contact'} {...props} ref={ref} />)

  const links = [HomeLink, AthlinksLink, PlanfuLink, PlayLink, ContactLink]

  const list = (anchor) => (

    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Athlinks', 'Planfu', 'Play', 'Conatct'].map((text, index) => (
          <ListItem
            button key={text}
            component={links[index]}
            classes={listClasses}
            onClick={handleClick}>
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemIcon/> */}
            <ListItemText primary={text} />
            {/* {text==='Athlinks' ? open ? <ExpandLess /> : <ExpandMore /> : ''} */}
          </ListItem>
          ))}
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse> 
  
        </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  )

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          {/* <Hidden smUp> */}
            <Fab 
              classes={classes.fab}
              color='primary'
              aria-label='navigation'
              onClick={toggleDrawer(anchor, true)}
              edge='start'
              className={classes.menuButton}
              color='inherit'>
              {/* <IconButton
                onClick={toggleDrawer(anchor, true)}
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'>
              </IconButton> */}
              <NavigationIcon />
            </Fab>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          {/* </Hidden> */}
        </React.Fragment>
      ))}
    </div>
  )
}
