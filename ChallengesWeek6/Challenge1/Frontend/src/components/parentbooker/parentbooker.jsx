import React, { Component } from 'react';

import './parentbooker.scss';

//Components used
import NavBar from '../navbar/navbar';
import Books from '../books/books';

import Login from "../login/login";

class ParentBooker extends Component {
    state = {
        loginVisible: true,
        books: []
     }

    componentDidMount(){
        console.log("Component redered");
    }

    verify(){
        localStorage.getItem();
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
                <NavBar />
                <Books />
            </div>
         );
    }
}
 
export default ParentBooker;