import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header'

function Home({products}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
    }));
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="page">
            <CssBaseline />
            <Header />
            {/* <br/>
            <br/>
            <br/> */}
            </div>
        </div>
    )
}

export default Home
