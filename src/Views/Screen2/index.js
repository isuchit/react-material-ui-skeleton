import React from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
},
}));

function Screen2() {
  const classes = useStyles();

    return (
       <div>
          <Container maxWidth="md">
            <Paper className={classes.paper}>
              <Typography variant="h4" align="center" gutterBottom>
                Screen 2
              </Typography>
            </Paper>
          </Container>
        </div>
    )
}

export default Screen2
