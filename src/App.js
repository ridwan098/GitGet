import React, { Component } from 'react';
import Form from './Components/Form/Form';
import './App.css';
import Axios from 'axios';
import ShowUser from './Components/Form/showUser';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userInfo: null
        }
    }



    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.userName.value;
        Axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
                this.setState({
                    ...this.state,
                    userInfo: res.data
                })
                console.log('image url:', this.state.userInfo.avatar_url)
                console.log(res.data)
            }).catch(err => {
                console.log('user not found', err)
                this.setState({
                    userInfo: 'userNot found'
                })
            })

    }

    componentDidUpdate() {
        console.log('yes updated')
        console.log(this.state)
    }



    render() {
        const { userInfo } = this.state;
        const detail = userInfo ? (<ShowUser props={this.state.userInfo} />) : (<p>user not found</p>)
        return (

            <div>
                <Form getUser={this.getUser} />
                {detail}
                {/* {this.state.userInfo ? (
                    <p>{detail}</p>
                ) : (<p>Please enter a username</p>
                    )} */}
            </div >
        );
    }
}

export default App;