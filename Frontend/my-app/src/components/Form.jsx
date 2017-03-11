import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Form extends Component {

    render() {

        return (
            <form>
                <input type="text" ref={(input) => { this.textInput = input; }}/>

                <input type="submit" value="Submit"/>

                text will be her
            </form>
        )
    }
}

export default Form;
