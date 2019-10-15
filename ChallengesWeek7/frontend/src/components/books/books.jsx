import React, { Component } from 'react';

//Styles
import './books.scss';

//Components used
import SideMenuFiltersComponent from '../sidemenu/sideMenuFilters';
import Book from "../book/book";

class Books extends Component {

    state = {  }
    render() {
        const { books } = this.props;
        return ( 
            <div className="section-1">
            <SideMenuFiltersComponent />
			<div className="content">
				<div className="listing-manipulator">
                    <h2>New Releases</h2>
                    <div className="content-filter-box">
                        <p><a href="../../../public/index.html">Release Date</a> | <a href="../../../public/index.html">Popularity</a></p>
                    </div>
                    <div className="layout-form-box">
                        <i className="fa fa-th-large"></i>
                        <i className="fa fa-th-list"></i>
                    </div>
                </div>
				<div id="book-container" className="books">
                    {books.map((book)=>{
                        console.log('entre');
                        return <Book key={book.id} 
                            id ={ book.id}
                            title= {book.title}
                            description= {book.description}
                            imageSrc= {book.imageLinks[0].smallThumbnail}
                            authors= {book.authors.toString()}
                            averageRating= {book.averageRating}
                            rating= {book.averageRating}
                    />;
                    })}
				</div>
			</div>
			<div className="menu-right">
				<div className="menu-box">
                    <p>MOST READ BOOKS</p>
                    <ol>
                        <li><a href="../../../public/index.html">Hooked: How To Build Habit forming Products.</a></li>
                        <li><a href="../../../public/index.html">The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future</a></li>
                        <li><a href="../../../public/index.html">Lean In: Women, Work, and the Will to Lead.</a></li>
                        <li><a href="../../../public/index.html">Building a Bussiness When There Are Not Easy Answers.</a></li>
                        <li><a href="../../../public/index.html">How Google Works</a></li>
                    </ol>
                </div>
			</div>
		</div>
         );
    }
}
 
export default Books;