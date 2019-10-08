import React, { Component } from 'react';


class Books extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="section-1">
			<div className="menu-left">
				<div className="menu-box">
                        <p>MAIN</p>
                        <ul>
                            <li>
                                <i className="fas fa-globe"></i><a href="#" className="element">Quito</a>
                            </li>
                            <li>
                                <i className="fas fa-globe"></i><a href="#" className="element">Cartagena</a>
                            </li>
                            <li>
                                <i className="fas fa-globe"></i><a href="#" className="element">Medellín</a>
                            </li>
                            <li>
                                <i className="fas fa-tablet-alt "></i><a href="#" className="element">Digital</a>
                            </li>
                            <li>
                                <i className="fas fa-user-tag"></i><a href="#" className="element">Personal Loans</a>
                            </li>
                            <li className="selected">
                                <i className="fas fa-tags"></i><a href="#" className="element">New Releases</a>
                            </li>
                        </ul>
                </div>
                <div className="menu-box">
                    <p>YOUR BOOKS</p>
                    <ul>
                        <li>
                            <i className="fas fa-book-open"></i><a href="#" className="element">Readings</a>
                        </li>
                        <li>
                            <i className="fas fa-history"></i><a href="#" className="element">History</a>
                        </li>
                        <li>
                            <i className="fas fa-heart"></i><a href="#" className="element">Read Later</a>
                        </li>
                        <li>
                            <i className="fas fa-tags"></i><a href="#" className="element">Favorites</a>
                        </li>
                    </ul>
                </div>
			</div>
			<div className="content">
				<div className="listing-manipulator">
                    <h2>New Releases</h2>
                    <div className="content-filter-box">
                        <p><a href="#">Release Date</a> | <a href="#">Popularity</a></p>
                    </div>
                    <div className="layout-form-box">
                        <i className="fa fa-th-large"></i>
                        <i className="fa fa-th-list"></i>
                    </div>
                </div>
				<div id="book-container" className="books">
				</div>
			</div>
			<div className="menu-right">
				<div className="menu-box">
                    <p>MOST READ BOOKS</p>
                    <ol>
                        <li><a href="#">Hooked: How To Build Habit forming Products.</a></li>
                        <li><a href="#">The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future</a></li>
                        <li><a href="#">Lean In: Women, Work, and the Will to Lead.</a></li>
                        <li><a href="#">Building a Bussiness When There Are Not Easy Answers.</a></li>
                        <li><a href="#">How Google Works</a></li>
                    </ol>
                </div>
			</div>
		</div>
         );
    }
}
 
export default Books;