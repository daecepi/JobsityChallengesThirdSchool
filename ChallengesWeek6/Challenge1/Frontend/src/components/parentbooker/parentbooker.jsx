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
        let token = localStorage.getItem("access_token");
        if(token){
            this.setState({loginVisible: false});
        }
    }

    notifyCorrectAuth = () =>{
        this.setState({loginVisible: false});
    }

    handdleLogout = () => {
        localStorage.removeItem("access_token");
        
        this.setState({loginVisible: true})
    }

    getBooks= async () => {
        let token = localStorage.getItem('access_token');
        let authResult = await fetch('http://localhost:5000/books',{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+token,
                },
            }).then(res => res.json());

        console.log(authResult);
    }

    render() { 
        return (
            <div className="app-container">
                {this.state.loginVisible ? <Login onGoodAuth={this.notifyCorrectAuth} />: ""}
                {!this.state.loginVisible ? <NavBar logout={this.handdleLogout} /> : ""}
                {!this.state.loginVisible ?<Books /> : ""}
            </div>
         );
    }
}
 
export default ParentBooker;