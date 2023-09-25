import React, { Component } from 'react';
import axios from 'axios';

class UserDataDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
        };
    }

    componentDidMount() {
        axios.get('/api/get-user-data/') // Update with your API endpoint
            .then(response => {
                this.setState({ userData: response.data });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }

    render() {
        const { userData } = this.state;

        if (!userData) {
            return <div>Loading...</div>;
        }

        return (
          <div className='pad'>
                <h1> herouuu </h1>
                <h2>Welcome, {userData.username}!</h2>
                <p>Email: {userData.email}</p>
                {/* Display other user data */}
            </div>
        );
    }
}

export default UserDataDisplay;

