class Book{
    constructor(title, description, authors, publishedDate, averageRating, pageCount, imageLinks){
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.publishedDate = publishedDate;
        this.averageRating = averageRating;
        this.pageCount = pageCount;
        this.imageLinks = imageLinks;
    }

    getTitle(){
        return this.title;
    }

    getDesc(){
        return this.title;
    }

    getAuthors(){
        return this.authors;
    }
}