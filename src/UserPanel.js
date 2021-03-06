import React, { Component } from 'react';

// Check there is a UserDOB object, and displays it accordingly.
const UserDOB = (props) => {
    let userDOBJSX = null;
    if (props.dob !== null && typeof props.dob === 'object') {
        userDOBJSX = <p key={props.dob.date}>Age: {props.dob.age} Born on: {props.dob.date}</p>
    }
    return userDOBJSX;
}

// Check there is a UserID object, and displays it accordingly.
const UserID = (props) => {
    let userIDJSX = null;
    if (props.id !== null && typeof props.id === 'object') {
        userIDJSX = <p key={props.id.name}>User ID: {props.id.name} {props.id.value}</p>
    }
    return userIDJSX;
}

// Check there is a UserLocation object, and displays it accordingly.
const UserLocation = (props) => {
    let userLocationJSX = null;
    if (props.location !== null && typeof props.location === 'object') {
        let cityJSX = <li>City: {props.location.city}</li>;
        let coordinatesJSX = <li>Latitute: {props.location.coordinates.latitude} Longitude: {props.location.coordinates.longitude}</li>;
        let countryJSX = <li>Country: {props.location.country}</li>;
        let postcodeJSX = <li>Postcode: {props.location.postcode}</li>;
        let stateJSX = <li>State: {props.location.state}</li>;
        let streetJSX = <li>Street: {props.location.street.number} {props.location.street.name}</li>;
        let timezoneJSX = <li>Timezone: {props.location.timezone.offset} {props.location.timezone.description}</li>;
    
        userLocationJSX = <ul>
        <h3>User Location</h3>
        {cityJSX}
        {coordinatesJSX}
        {countryJSX}
        {postcodeJSX}
        {stateJSX}
        {streetJSX}
        {timezoneJSX}
    </ul>
    }
    return userLocationJSX;
}

// Check there is a UserLogin object, and displays it accordingly.
const UserLogin = (props) => {
    let userLoginJSX = null;
    if (props.login !== null && typeof props.login === 'object') {
        userLoginJSX = <ul>
            <h3>User Login</h3>
            <li>md5: {props.login.md5}</li>
            <li>password: {props.login.password}</li>
            <li>salt: {props.login.salt}</li>
            <li>sha1: {props.login.sha1}</li>
            <li>sha256: {props.login.sha256}</li>
            <li>username: {props.login.username}</li>
            <li>uuid: {props.login.uuid}</li>
        </ul>
    }
    return userLoginJSX;
}

// Check there is a Usernames object, and displays it accordingly.
const Username = (props) => {
    let userNameJSX = null;
    if (props.name !== null && typeof props.name === 'object') {
        userNameJSX = <p key={props.name.title}>{props.name.title} {props.name.first} {props.name.last}</p>
    }
    return userNameJSX;
}

// Check there is a UserPicture object, and displays it accordingly.
const UserPicture = (props) => {
    let userPictureJSX = null;
    if (props.picture !== null && typeof props.picture === 'object') {
        userPictureJSX = <img src={props.picture.thumbnail} alt="user jpeg"></img>
    }
    return userPictureJSX;
}

// Check there is a UserRegistered object, and displays it accordingly.
const UserRegistered = (props) => {
    let userRegisteredJSX = null;
    if (props.registered !== null && typeof props.registered === 'object') {
        userRegisteredJSX = <p>This user registered at the age of {props.registered.age} on {props.registered.date}</p>
    }
    return userRegisteredJSX;
}

class UserPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }
    // Allows the button to register when the button is clicked and then swtiching.
    toggle = () => {
        this.setState({isClicked: !this.state.isClicked});
    }
    
    render() {
        if (this.props.user !== null) {
            let topLevelListItem = [];
            for (let [key, value] of Object.entries(this.props.user)) {
                if (typeof value !== 'object') {
                    topLevelListItem.push(<ul><li key={key}>{key}: {value}</li></ul>)
                }
            }
            let userDetails = null;
            // If statement will show all user details if the details are hidden.
            if (this.state.isClicked === true) {
                userDetails = (<div id={this.props.user.login.uuid}>
                    <ul>
                        <Username name={this.props.user.name} />
                        <UserPicture picture={this.props.user.picture} />
                        <UserDOB dob={this.props.user.dob} />
                        {topLevelListItem}
                        <UserID id={this.props.user.id} />
                        <UserLocation location={this.props.user.location} />
                        <UserLogin login={this.props.user.login} />
                        <UserRegistered registered={this.props.user.registered} />
                        <button key="displayUser" index={this.props.user.login.uuid} onClick={() => this.toggle("displayUser")}>Hide Details</button>
                    </ul>
                </div>)
            }
            // Will hide all the user details if the details are displayed.
            else {
                userDetails = (<div id={this.props.user.login.uuid}>
                    <ul>
                        <Username name={this.props.user.name} />
                        <UserPicture picture={this.props.user.picture} />
                        <div>
                            <button key="displayUser" index={this.props.user.login.uuid} onClick={() => this.toggle("displayUser")}>Show Details</button>
                        </div>
                    </ul>
                </div>)
            }
            return userDetails;
        }
    }
}
export default UserPanel;