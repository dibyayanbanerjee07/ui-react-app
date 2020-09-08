import React, { Component } from 'react';
import {
    Paper,
    Step,
    StepLabel,
    Stepper,
    withStyles
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import classnames from 'classnames';

import StartIcon from '../icons/StartIcon';
import EndIcon from '../icons/EndIcon';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: '1px solid #A4D3EE',
        overflowY: 'auto',
        maxHeight: '100vh'
    },
    stepperConnector: {
        width: 1, height: 45, backgroundColor: '#000', marginLeft: 12
    },
    step: {
        marginTop: -12,
        marginBottom: -10
    },
    iconDot: {
        marginLeft: 3,
        color: '#05B8CC'
    },
    entry: {
        display: 'flex',
        alignItems: 'center'
    },
    line: {
        height: 1.5,
        width: 38,
        backgroundColor: '#05B8CC',
        marginLeft: -10
    },
    detailBox: {
        display: 'flex',
        border: '1px solid #DCDCDC',
        height: 20,
        width: '40vw',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    '@global': {
        'div.detailsBox-0': {
            display: 'flex',
            border: '1px solid #DCDCDC',
            height: 20,
            width: '35vw',
            padding: 10,
            alignItems: 'center',
            backgroundColor: '#E6E6FA',
            color: '#32CD32'
        }
    }
});

class StatusPanel extends Component {
    renderStatusEntries = data => {
        const { classes } = this.props;
        if (data[0] !== undefined) {
           return data[0].scan.map((item, index) => {
                return (
                    <Step key={index} className={classes.step}>
                        <StepLabel icon={<FiberManualRecordIcon fontSize="small" className={classes.iconDot}/>}>
                            <div className={classes.entry}>
                                <div className={classes.line}></div>
                                <div className={classnames(classes.detailBox, `detailsBox-${index}`)}>
                                    <div style={{ flex: 1, fontSize: 10, fontWeight: 'bold', padding: 5 }}>
                                        {item.location.toLowerCase().includes('consignment') ? item.location.replace('Consignment ','') : item.location}
                                    </div>
                                    <div style={{ flex: 1, fontSize: 10, fontWeight: 'bold', textAlign: 'right', padding: 5 }}>
                                        {this.returnDate(item.time)}
                                    </div>
                                    <div style={{ flex: 1, fontSize: 10, fontWeight: 'bold', padding: 5, textAlign: 'left', marginLeft: 15}}>
                                        {this.returnTime(item.time)}
                                    </div>
                                </div>
                            </div>
                        </StepLabel>
                    </Step>
                );
            })
        }
        else return null
    };

    returnDate = date => {
        const strArr = date.split(' ');
        return strArr[0];
    };

    returnTime = date => {
        const strArr = date.split(' ');
        const timeArr = strArr[1].split(':');
        return `${timeArr[0]}:${timeArr[1]}`;
    };

    render() {
        const { cardData, classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Stepper orientation="vertical" connector={<div className={classes.stepperConnector}></div>} completed={false}>
                    <Step>
                        <StartIcon />
                    </Step>
                    {
                        this.renderStatusEntries(cardData)
                    }
                    <Step>
                        <EndIcon />
                    </Step>
                </Stepper>
            </Paper>
        );
    }
}

export default withStyles(styles, { withTheme: true })(StatusPanel);