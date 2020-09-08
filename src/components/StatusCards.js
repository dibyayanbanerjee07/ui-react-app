import React, { Component } from 'react';
import {
    Card,
    CardContent,
    Typography,
    withStyles
} from '@material-ui/core';
import classnames from 'classnames';

const styles = () => ({
    card: {
        backgroundColor: '#E6E6FA',
        color: '#4d4dff',
        margin: '8px',
        height: 80,
        width: 90,
        cursor: 'pointer'
    },
    cardView: {
        display: 'flex',
        justifyContent: "center",
        lignItems: "center",
        margin: '30px 0 30px 0'
    },
    title: {
        marginTop: -11,
        marginLeft: -7,
        fontSize: 14,
        fontWeight: 'bold'
    },
    counter: {
        fontSize: 32,
        textAlign: "center",
        marginTop: 10
    },
    '@global': {
        'div.statusCard-0': {
            backgroundColor: '#4d4dff',
            color: '#fff',
            margin: '8px',
            height: 80,
            width: 90,
            cursor: 'pointer'
        }
    }
});

class StatusCards extends Component {
    state = {
        cardsData: []
    };

    componentWillReceiveProps = (props) => { 
        const { cardData } = props;
        let arr = [];
        let DEL_COUNT = 0;
        let INT_COUNT = 0;
        let OOD_COUNT = 0;
        let DEX_COUNT = 0;
        let NFI_COUNT = 0;
        cardData.forEach(item => {
             arr.push(Object.assign({}, item));
        });
        arr.forEach(item => {
            if (item.current_status_code === 'DEL') {
                DEL_COUNT += 1;
            } else if (item.current_status_code === 'INT') {
                INT_COUNT += 1
            } else if (item.current_status_code === 'OOD') {
                OOD_COUNT += 1
            } else if (item.current_status_code === 'DEX') {
                DEX_COUNT += 1
            } else {
                NFI_COUNT += 1
            }
        });
        let newArr = [
            {
                title: 'DEL',
                count: DEL_COUNT
            },
            {
                title: 'INT',
                count: INT_COUNT
            },
            {
                title: 'OOD',
                count: OOD_COUNT
            },
            {
                title: 'DEX',
                count: DEX_COUNT
            },
            {
                title: 'NFI',
                count: NFI_COUNT
            }
        ];
        this.setState({
            cardsData: newArr
        });
    };

    render() {
        const { cardsData } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.cardView}>
                {
                    cardsData.map((item, index) => {
                        return (
                            <Card key={index} className={classnames(classes.card, `statusCard-${index}`)}>
                                <CardContent>
                                    <Typography className={classes.title}>{item.title.toUpperCase()}</Typography>
                                    <Typography className={classes.counter}>{item.count}</Typography>
                                </CardContent>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(StatusCards);