import React, { Component } from 'react';
import {
    AppBar,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    withStyles
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
        backgroundColor: '#fff',
        color: "#000"
    }
});

class TopBar extends Component {
    state = {
        tabValue: 0
    };

    handleMenu = () => {
        this.setState({
            open: true
        });
    };

    changeTab = (event, value) => {
        this.setState({
            tabValue: value
        });
    };

    render() {
    const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                            Design
                        </Typography>
                        <Tabs
                            onChange={this.changeTab}
                            variant="fullWidth"
                            color="inherit"
                            value={0}
                        >
                            <Tab label="Home"/>
                            <Tab label="Brands"/>
                            <Tab label="Transporters"/>
                        </Tabs>
                        <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(TopBar);