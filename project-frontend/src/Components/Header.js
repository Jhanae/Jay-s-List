import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

function Header() {
    let history = useHistory();

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: '#fff',
            fontFamily: 'Nunito',
            // textAlign: 'center',
        },
        button: {
            color:'#fff',
            backgroundColor: '#FCC4D6',
            fontSize: '1.5rem',
            margin: '1.5px',
            borderRadius: 3,
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 0.3,
        },
        appbarWrapper:{
            width: '80%',
            margin: 'auto',
        },
        appbarTitle: {
            flexGrow: '2',
        },
        colorText: {
            color:'#FCC4D6',
        },
        title: {
            fontSize: '3rem'
        },
    }));
    const classes = useStyles()

    function handleClick() {
        history.push('/shop')
    }

    function handleLogIn() {
        history.push('/log-in')
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
            <h1 className={classes.title}>Welcome to <br/> Jay's<span className={classes.colorText}>List</span></h1>
            <br/>
            <br/>
            <br/>
            <button onClick={handleClick} type="button" className={classes.button}>View Products</button>
            <button onClick={handleLogIn} type="button" class={classes.button}>Log in</button>
            
            </div>
            <br/>
        </div>
    );
}

export default Header;
