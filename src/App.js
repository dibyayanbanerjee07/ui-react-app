import React, { Component, Fragment } from 'react';
import TopBar from './components/TopBar';
import StatusCards from './components/StatusCards';
import DetailView from './components/DetailView';

class App extends Component {
    state = {
        data: []
    };

    componentWillMount = () => {
        fetch('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', {
            params: {
                "name": "mayank"
            },
            method: "POST",
            headers: {
                "Authorization": "Bearer tTU3gFVUdP",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "banerjee.dib775@gmail.com"
            })
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: res.data
            });
        })
        .catch(err => console.log(err));
    };

    render() {
        const { data } = this.state;
        return (
            <Fragment>
                <TopBar />
                <StatusCards cardData={data}/>
                <DetailView cardData={data} />
            </Fragment>
        );
    }
};

export default App;