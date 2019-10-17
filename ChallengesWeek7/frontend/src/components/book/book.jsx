import React, { Component } from 'react';

//Rating component
import StarRatingComponent from 'react-star-rating-component';

//Bringing styles
import './book.scss';

class Book extends Component {

    //Check star rating component
    render() {
        const { id, title, imageSrc, authors, averageRating  } = this.props;
        return ( 
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
         );
    }
}
 
export default Book;