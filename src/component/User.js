import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div className="user">
            <div className="row">
                <div className="col-xs-12">
                    <h1>User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {this.props.username}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default User;