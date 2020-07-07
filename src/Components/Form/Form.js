import React, { Component } from 'react';
import Logo from '../images/logo.png';
class Form extends Component {


    render() {
        return (

            <div>
                <h1>GitGet</h1>
                <p>Display Github account info with GitGet </p>
                <img src={Logo} alt="GitGet logo" style={{ width: '100px' }} /><br /><br />
                <form id="form" onSubmit={this.props.getUser}>
                    <input type="text" id="txt" placeholder="Enter username" name='userName' required />
                    <input type="submit" id="btn" defaultValue="GitGet User" />
                </form>

            </div>


        );
    }
}


export default Form;