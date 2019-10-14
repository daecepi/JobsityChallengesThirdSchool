import React, { Component } from 'react';

import './parentbooker.scss';

//Components used
import NavBar from '../navbar/navbar';
import Books from '../books/books';

import Login from "../login/login";

class ParentBooker extends Component {
    state = {
        loginVisible: undefined,
        books: []
     }

    componentDidMount(){
        let token = localStorage.getItem("access_token");
        if(token){
            this.setState({loginVisible: false});
        }
    }

    handdleLogout = () => {
        localStorage.removeItem("access_token");
        
        this.setState({loginVisible: true})
    }

    getBooks= async () => {
        let authResult = await fetch('http://localhost:5000/books',{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzA3MzkzNzksImV4cCI6MTU3MDgyNTc3OX0.15I5f5cFHdY5_KZAf5MBOS6zzYKZExN_M4ka9FgCwWc',
                },
            }).then(res => res.json());

        console.log(authResult);
    }

    render() { 
        return (
            <div className="app-container">
                {this.state.loginVisible?<Login />: ""}
                <NavBar logout={this.handdleLogout} />
                <Books />
            </div>
         );
    }
}
 
export default ParentBooker;