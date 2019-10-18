import React, { Component } from 'react';

//Typpy pop up component
import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/scale-subtle.css';

//Rating component
import StarRatingComponent from 'react-star-rating-component';
import SearchComponent from '../searchComponent/searchComponent';


//Bringing styles
import './book.scss';

class Book extends Component {

    //Check star rating component
    render() {
        const { id, title, description, imageSrc, authors, averageRating, release  } = this.props;
        return (
            <Tippy
                content={<SearchComponent />}
                theme="bootstrap"
                distance={7}
                hideOnClick={false}
            >
                <div className="book">
                    <img src={imageSrc} alt="" />
                    <p className="book-title">{title}</p>
                    <p className="authors">{authors}</p>
                    <StarRatingComponent
                        name={"rate"+id}
                        starCount={5}
                        value={averageRating}
                    />
                </div>
            </Tippy>
         );
    }
}
 
export default Book;