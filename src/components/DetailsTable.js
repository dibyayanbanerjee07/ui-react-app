import React, { Component } from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    withStyles
} from '@material-ui/core';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: '1px solid #A4D3EE',
        maxHeight: '100vh',
        overflowY: 'auto'
    },
    tableHeaderText: {
        fontSize: 10,
        maxWidth: 50
    },
    table: {
        marginTop: -15
    },
    tableContentText: {
        fontSize: 10,
        maxWidth: 30,
        fontWeight: 'bold'
    },
    tableDeliveryText: {
        fontSize: 10,
        maxWidth: 30,
        fontWeight: 'bold',
        color: '#32CD32'
    },
    '@global': {
        
    }
});

const tableHeader = [
    {
        id: 1,
        title: 'AWB NUMBER',
        align: 'left'
    }, 
    {
        id: 2,
        title: 'TRANSPORTER',
        align: 'left'
    },
    {
        id: 3,
        title: 'SOURCE',
        align: 'left'
    },
    {
        id: 4,
        title: 'DESTINATION',
        align: 'left'
    },
    {
        id: 5,
        title: 'BRAND',
        align: 'left'
    },
    {
        id: 6,
        title: 'START DATE',
        align: 'left'
    },
    {
        id: 7,
        title: 'ETD',
        align: 'left'
    },
    {
        id: 8,
        title: 'STATUS',
        align: 'left'
    }
];

class DetailsTable extends Component {
    renderTableData = tableData => {
        const { classes } = this.props;
        return tableData.map(item => {
            return (
                <TableRow key={item._id} hover>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{item.awbno}</TableCell>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{item.carrier}</TableCell>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{item.from}</TableCell>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{item.to}</TableCell>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{item.carrier}</TableCell>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{this.startDate(item.pickup_date)}</TableCell>
                    <TableCell classes={{
                        root: classes.tableContentText
                    }}>{this.deliveryDate(item.extra_fields)}</TableCell>
                    <TableCell classes={{
                        root: classes.tableDeliveryText
                    }}>{item.current_status}</TableCell>
                </TableRow>
            );
        });
    };

    startDate = date => {
        return date !== null ? date.split(' ')[0] : '';
    };

    deliveryDate = date => {
        return date !== undefined ? date.expected_delivery_date.split(' ')[0] : '';
    }

    render() {
        const { classes, cardData } = this.props;
        return (
            <Paper className={classes.paper}>
                <Table size="small" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {tableHeader.map(item => {
                                return (
                                    <TableCell key={item.id} align={item.align} classes={{
                                        root: classes.tableHeaderText
                                    }}>
                                        {item.title}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderTableData(cardData)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DetailsTable);