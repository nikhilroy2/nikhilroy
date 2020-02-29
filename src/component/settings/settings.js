import React, { Component } from 'react';
import './settings.css';
import Settings_img from '../image/icons/settings.png';

export default class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="settings position-fixed">
                <img src={Settings_img} alt=""/>
            </div>
        )
    }
}
