export interface Book{
    title: string;
    description: string;
    authors: [];
    publishedDate: string;
    pageCount: number;
    imageLinks: [];
    city: string;
    type: string;
}

/* 
export class BookModel {
    public title: string;
    public description: string;
    public authors: [];
    public publishedDate: string;
    public pageCount: number;
    public imageLinks: [];
    public city: string;
    public type: string;
    
    constructor(title, description, authors, publishedDate, averageRating, pageCount, imageLinks){
        title = title;
        description = description;
        authors = authors;
        publishedDate = publishedDate;
        averageRating = averageRating;
        pageCount = pageCount;
        imageLinks = imageLinks;
    }
    
}*/