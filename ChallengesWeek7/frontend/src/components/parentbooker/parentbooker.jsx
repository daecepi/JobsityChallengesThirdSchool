import React, { Component } from 'react';

import './parentbooker.scss';

//Components used
import NavBar from '../navbar/navbar';
import Books from '../books/books';


class ParentBooker extends Component {
    state = {
        loginVisible: true, 
        currentResourse: "general",
        searchWords: "",
        books: []
     }

     componentDidMount(){
        let token = localStorage.getItem("access_token");
        if(token){
            this.setState({loginVisible: false});
            this.getBooks(this.state.pageCount);
        }

        //Get the query params
    }

    /**
     * Function used to 
     */
    handlePagination(num){
        console.log(num)
    }

    //Method to get all books
    getBooks= async (startIndex = 0) => {
        let token = localStorage.getItem('access_token');
        let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}`,{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+token,
                },
            }).then(res => res.json());
        
            if(authResult === 400){
                alert(authResult.message)
            }else{
                //Setting the state that holds the books for updates
                this.setState({books: authResult});
            }
            console.log(authResult);
    }

    /**
     * Function that looks for books in the API by type
     * 
     */
    getBooksByType= async (type, startIndex = 0) =>{
        let token = localStorage.getItem('access_token');
        let authResult = await fetch(`http://localhost:5000/books?startIndex=${this.state.pageCount}&type=${type}`,{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+token,
                },
            }).then(res => res.json());

        console.log(authResult);
        if(authResult === 400){
            alert(authResult.message)
        }else{
            //Setting the state that holds the books for updates
            this.setState({books: authResult});
        }
    }

    getBooksByCity = async (city, startIndex = 0) =>{
        let token = localStorage.getItem('access_token');


        let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}&city=${city}`,{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+token,
                },
            }).then(res => res.json());
            console.log(authResult)
            if(authResult === 400){
                alert(authResult.message)
            }else{
                //Setting the state that holds the books for updates
                this.setState({books: authResult});
            }
    }

    getBooksByWords = async (words, startIndex = 0) =>{
        let token = localStorage.getItem('access_token');

        let authResult = await fetch(`http://localhost:5000/books?startIndex=${startIndex}&words=${this.state.searchWords}`,{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+token,
                },
            }).then(res => res.json());
            console.log(authResult)

            if(authResult === 400){
                alert(authResult.message)
            }else{
                //Setting the state that holds the books for updates
                this.setState({books: authResult});
            }
    }

    render() { 
        console.log(this.props)
        const { books, pageCount } = this.state;
        return (
            <div className="app-container">
                <>
                <NavBar handleSearch={this.getBooksByWords} searchValue={this.state.searchWords} logout={this.props.handleLogout} />
                <Books books={books} pageCount={pageCount} getBooksByCity={this.getBooksByCity} getBooksByType={this.getBooksByType} handlePagination={this.handlePagination} />
                </>
            </div>
         );
    }
}
 
export default ParentBooker;