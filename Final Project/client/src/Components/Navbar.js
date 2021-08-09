import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Nav, Navbar } from 'react-bootstrap'
 

function NavBar() {
    const useStyles = makeStyles((theme) => ({
        appbar: {
            // background: 'none',
            textAlign: 'left',
            background: 'black',
            paddingRight: '2rem'
            // display: 'block',
        },
        appbarTitle: {
            color: 'white !important',
            underline: 'none',
            fontSize: '1.5rem',
            marginLeft: '1.5rem',
            textWeight: 'bold'
        },
        colorTitle: {
            color:'#FCC4D6'
        },
        colorText: {
            textAlign: 'center',
            fontSize: '1rem',
        },
        title: {
            fontSize: '1rem'
        }

    }));
    const classes = useStyles()


    return (
        // <div>
        //     <AppBar className={classes.appbar} elevation={0}>
        //         <Toolbar className={classes.appbarWrapper} >
        //         <a href="/" className={classes.appbarTitle}>Jay's<span className={classes.colorText}>List</span></a>
        //         <a href="/shop">Products</a>
        //         <a href="/profile">Profile</a>
        //         </Toolbar>
        //     </AppBar>
        // </div>
        <Navbar className={classes.appbar} collapseOnSelect expand="sm"  variant="light">
        <Navbar.Brand href="/"><h5 className={classes.appbarTitle}>Jay's<span className={classes.colorTitle}>List</span></h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link className={classes.colorText} style={{"color" : '#fff'}} href="/shop">Products</Nav.Link>
            <Nav.Link className={classes.colorText} style={{"color" : '#fff'}} href="/cart">Cart</Nav.Link>
            <Nav.Link className={classes.colorText} style={{"color" : '#fff'}} href="/profile">Profile</Nav.Link>
            <Nav.Link className={classes.colorText} style={{"color" : '#fff'}} href="/log-in">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
