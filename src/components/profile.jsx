import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import image from '../asset/profile.png';

class Profile extends Component {
  handleBack = () => {
    this.props.history.push('/');
  };

  render() {
    const { user } = this.props;
    if (!user) return <Redirect to="/" />;
    return (
      <div className="row">
        <div style={{ marginTop: '160px' }} className="col-sm-6">
          <h3>My Profile</h3>
          <hr />
          <strong>Name : {user.name}</strong>
          <br />
          <strong>Email : {user.email}</strong>
          <br />
          <br />
          <br />
          <button className="btn btn-primary" onClick={this.handleBack}>
            Back
          </button>
        </div>
        <div className="col-sm-6">
          <img src={image} height="450px" width="100%" />
        </div>
      </div>
    );
  }
}

export default Profile;
