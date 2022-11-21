import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
    margin:'20rem 50rem'

  },
}));

export default function LoadingComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        Loading....
      <CircularProgress />
    </div>
  );
}

//loading component from material UI