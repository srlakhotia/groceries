import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MiniCart from '../components/miniCart';

const styles = {
    grow: {
        flexGrow: 1,
        padding: '10px'
    },
    root: {
        flexGrow: 1
    }
}

function Header (props) {
    const { classes } = props;
    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Grocery Store
                    </Typography>
                    <MiniCart></MiniCart>
                    <Button color="inherit">Sign in</Button>
                </Toolbar>
            </AppBar>
        </div> 
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);