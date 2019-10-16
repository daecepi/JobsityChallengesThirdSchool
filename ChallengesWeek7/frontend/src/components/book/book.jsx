import React, { Component } from 'react';

//Rating component
import StarRatingComponent from 'react-star-rating-component';

//Bringing styles
import './book.scss';

class Book extends Component {
    state = { 
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        imageSrc: this.props.imageSrc,
        authors: this.props.authors,
        averageRating: this.props.averageRating,
        rating: this.props.averageRating
     }


    //Check star rating component
    render() {
        const { id, title, imageSrc, authors, averageRating  } = this.state;
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