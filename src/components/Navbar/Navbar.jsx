import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import elogo from '../../assets/elogo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <Appbar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.appBar} color="inherit">
                        <img src={elogo} alt="Commerce.js" height="25px" className={classes.image}/>
                        eCommerceReactSite
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </Appbar>
        </div>
    )
}

export default Navbar
