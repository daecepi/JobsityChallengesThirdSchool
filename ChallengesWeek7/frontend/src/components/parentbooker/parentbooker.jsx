import React, { Component } from 'react';

import './parentbooker.scss';

//Components used
import NavBar from '../navbar/navbar';
import Books from '../books/books';


class ParentBooker extends Component {
    state = {
        loginVisible: true,
        books: []
     }

    componentDidMount(){
        let token = localStorage.getItem("access_token");
        if(token){
            this.setState({loginVisible: false});
            this.getBooks();
        }
    }


    

    //Method to get all books
    getBooks= async () => {
        let token = localStorage.getItem('access_token');
        let authResult = await fetch('http://localhost:5000/books',{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+token,
                },
            }).then(res => res.json());
        
        //Setting the state that holds the books for updates
        this.setState({books: authResult});
    }

    getDigitalBooks= async () =>{
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
        const { books } = this.state;
        return (
            <div className="app-container">
                <NavBar logout={this.handdleLogout} /> :
                <Books books={books}/>
            </div>
         );
    }
}
 
export default ParentBooker;