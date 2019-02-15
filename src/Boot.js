import React, {Component} from 'react';
import Nav from "./Router";

import axios from 'axios';


class Boot extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentWillMount() {
        console.log("will mount ...")

        //TODO
        // 1 category (product + store)


    }

    render() {
        return (
            <div>
                <Nav></Nav>

            </div>
        );
    }
}

export default Boot;
