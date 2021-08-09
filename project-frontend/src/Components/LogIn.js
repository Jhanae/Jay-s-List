import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';


function LogIn() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '10rem',
            color: 'white',
        },
        colorText: {
            color:'#FCC4D6',
        },
        title: {
            fontSize: '3rem',
            color: '#fff'
        },
    }));
    const classes = useStyles()
    async function handleLogIn(e) {
        e.preventDefault();
    setIsLoading(true);
    async function login(){
     const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      if(res.ok){
        setIsLoading(false);
        const user = await res.json()
        // onLogin(user)
      } else {
        const err = await res.json()
        setErrors(err.errors)
      }
      };
    login()
  };


    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Log<span className={classes.colorText}>In</span></h1><br/>
            <form>
            <div className="mb-3" >
                <label>Email address</label>
                <br/>
                <input className="login-input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <br/>
                <small className="text-muted">
                We'll never share your email with anyone else.
                </small>
            </div>

            <div className="mb-3" >
                <label>Password</label>
                <br/>
                <input className="login-input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
            <div className="mb-3">
                <input type="checkbox" label="Check me out" />
                <label>&nbsp;&nbsp;{"Check me out"}</label>
            </div>
            <button onSubmit={(e) => handleLogIn(e)} variant="primary" type="submit">
                Submit
            </button>
            </form>
        </div>
    )
}

export default LogIn
