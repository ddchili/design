import React from 'react'
import Nav from '../../components/Nav'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon';
import brand from '../../static/img/svg/brand_demmerDesign.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Brand(props){
  return (
    <div className='w-2/3 md:w-full'>
      <img src={brand}/>
    </div>
  )
}