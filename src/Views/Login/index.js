import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox, Container } from '@material-ui/core';
import { Person, Fingerprint } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(3),
    },
    padding: {
        padding: theme.spacing(2)
    },
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
    },
  }));

function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const signIn = e => {
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push('/')
        })
            .catch(error => alert(error.message))
    }

    const signUp = e => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <Container maxWidth="sm">
        <Paper className={classes.paper}>
        <div className={classes.margin}>
        <h2>React Material UI Skeleton - Login Page</h2>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Person />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="email" value={email} label="Email" type="email" onChange={e => setEmail(e.target.value)} fullWidth autoFocus required />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="password" value={password} label="Password" type="password" onChange={e => setPassword(e.target.value)} fullWidth required />
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <FormControlLabel control={
                        <Checkbox
                            color="primary"
                        />
                    } label="Remember me" />
                </Grid>
                <Grid item>
                    <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={4} style={{ marginTop: '10px' }}>
            <Grid item>
                <Button onClick={signIn} variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                </Grid>
                <Grid item>
                <Button onClick={signUp} variant="outlined" color="primary" style={{ textTransform: "none" }}>Sign Up</Button>
                </Grid>
            </Grid>
        </div>
    </Paper>
    </Container>
    )
}

export default Login
