import React from 'react';
import DetailButton from './DetailButton';

const Username = (props) => {
    let userNameJSX = null;
    if (props.name !== null && typeof props.name === 'object') {
        userNameJSX = <p key={props.name.title}>{props.name.title} {props.name.first} {props.name.last}</p>
    }
    return userNameJSX;
}

const UserDOB = (props) => {
    let userDOBJSX = null;
    if (props.dob !== null && typeof props.dob === 'object') {
        userDOBJSX = <p key={props.dob.date}>Age: {props.dob.age} Born on: {props.dob.date}</p>
    }
    return userDOBJSX;
}

const UserPicture = (props) => {
    let userPictureJSX = null;
    if (props.picture !== null && typeof props.picture === 'object') {
        userPictureJSX = <img src={props.picture.thumbnail} alt="user photo"></img>
    }
    return userPictureJSX;
}

const UserID = (props) => {
    let userIDJSX = null;
    if (props.id !== null && typeof props.id === 'object') {
        userIDJSX = <p key={props.id.name}>User ID: {props.id.name} {props.id.value}</p>
    }
    return userIDJSX;
}

const UserRegistered = (props) => {
    let userRegisteredJSX = null;
    if (props.registered !== null && typeof props.registered === 'object') {
        userRegisteredJSX = <p>This user registered at the age of {props.registered.age} on {props.registered.date}</p>
    }
    return userRegisteredJSX;
}

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

const UserPanel = (props) => {
    if (props.user !== null) {
        let topLevelListItem = [];
        console.log(props.user);
        for (let [key, value] of Object.entries(props.user)) {
            if (typeof value !== 'object') {
                topLevelListItem.push(<li key={key}>{key}: {value}</li>)
            }
        }
        return <div>
            <hr />
                <Username name={props.user.name} />
                <UserPicture picture={props.user.picture} />
                <UserDOB dob={props.user.dob} />
                <UserID id={props.user.id} />
                <UserRegistered registered={props.user.registered} />
                <UserLogin login={props.user.login} />
                <UserLocation location={props.user.location} />
            <ul>
                <h3>User Information</h3>
                {topLevelListItem}
            </ul>
            <DetailButton />
        </div>
    }
}

export default UserPanel;