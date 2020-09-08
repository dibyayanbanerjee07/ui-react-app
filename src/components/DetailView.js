import React from 'react';
import { Grid } from '@material-ui/core';

import DetailsTable from './DetailsTable';
import StatusPanel from './StatusPanel';

const DetailView = ({ cardData }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <StatusPanel cardData={cardData} />
            </Grid>
            <Grid item xs={8}>
                <DetailsTable cardData={cardData} />
            </Grid>
        </Grid>
    );
}

export default DetailView;
