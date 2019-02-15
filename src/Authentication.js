import React, {Component} from 'react';

import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log("response facebook", response);
};

class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className="container">
                ok
                <FacebookLogin
                    appId="334703143750899"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={() => console.log("salut")}
                    callback={responseFacebook}/>
            </div>
        );
    }
}

export default Authentication;
