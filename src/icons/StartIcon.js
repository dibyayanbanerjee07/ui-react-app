import React from 'react';
import {
    Avatar,
    SvgIcon,
    withStyles
} from '@material-ui/core';

const styles = () => ({
    avatar: {
        backgroundColor: '#B0E2FF'
    },
    icon: {
        marginLeft: 5
    }
});

const StartIcon = ({ classes }) => {
    return (
        <Avatar className={classes.avatar}>
            <SvgIcon className={classes.icon}>
                <path d="M1424.068,641.873a.9.9,0,0,1-.9-.9v-26.8a.9.9,0,0,1,1.24-.829l19.743,8.164a.9.9,0,0,1,.019,1.649l-17.405,7.682a.9.9,0,0,1-.724-1.64h0l15.486-6.834-16.565-6.848v25.462A.9.9,0,0,1,1424.068,641.873Z" transform="translate(-1423.172 -613.281)" fill="#030504"/>
            </SvgIcon>
        </Avatar>
    );
};

export default withStyles(styles)(StartIcon);

